'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function ProjectChat({ opportunityId, userId }: { opportunityId: string, userId: string }) {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // 1. Fetch existing messages
    const fetchMessages = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*, profiles(full_name)')
        .eq('opportunity_id', opportunityId)
        .order('created_at', { ascending: true });
      setMessages(data || []);
    };

    fetchMessages();

    // 2. Real-time subscription (Slick modern feature)
    const channel = supabase
      .channel('project-chat')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
        setMessages(prev => [...prev, payload.new]);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [opportunityId]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;
    await supabase.from('messages').insert({
      opportunity_id: opportunityId,
      sender_id: userId,
      content: newMessage
    });
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-[500px] bg-brand-navy rounded-nad border border-brand-slate/20">
      <div className="p-4 border-b border-brand-slate/10 bg-brand-coalition rounded-t-nad">
        <h3 className="font-bold text-sm uppercase tracking-wider text-brand-yellow">Secure Project Chat</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`max-w-[80%] p-3 rounded-nad text-sm ${msg.sender_id === userId ? 'ml-auto bg-brand-yellow text-brand-navy font-medium' : 'bg-brand-coalition border border-brand-slate/20'}`}>
            <p className="text-[10px] opacity-70 mb-1">{msg.profiles?.full_name || 'Member'}</p>
            {msg.content}
          </div>
        ))}
      </div>

      <div className="p-4 bg-brand-coalition border-t border-brand-slate/10 flex gap-2">
        <input 
          type="text" 
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..." 
          className="flex-1 bg-brand-navy p-2 rounded border border-brand-slate/30 text-sm" 
        />
        <button onClick={sendMessage} className="btn-rally px-4 py-2 text-sm">Send</button>
      </div>
    </div>
  );
}
