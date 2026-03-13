'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function VettingQueue() {
  const [applicants, setApplicants] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const fetchApplicants = async () => {
    const { data } = await supabase.from('profiles').select('*').eq('status', 'pending');
    setApplicants(data || []);
  };

  const handleAction = async (id: string, newStatus: 'approved' | 'deny') => {
    await supabase.from('profiles').update({ status: newStatus }).eq('id', id);
    fetchApplicants();
    setSelectedUser(null);
  };

  useEffect(() => { fetchApplicants(); }, []);

  return (
    <div className="flex h-screen bg-brand-navy text-brand-paper">
      {/* List View */}
      <div className="w-1/3 border-r border-brand-slate/20 overflow-y-auto">
        <h2 className="p-6 text-xl font-bold border-b border-brand-slate/20">Vetting Queue</h2>
        {applicants.map(user => (
          <button key={user.id} onClick={() => setSelectedUser(user)}
            className={`w-full text-left p-6 border-b border-brand-slate/10 hover:bg-brand-coalition transition-colors ${selectedUser?.id === user.id ? 'bg-brand-coalition' : ''}`}>
            <p className="font-bold">{user.full_name}</p>
            <p className="text-sm text-brand-slate">{user.email}</p>
          </button>
        ))}
      </div>

      {/* Detail View */}
      <div className="flex-1 p-10 overflow-y-auto">
        {selectedUser ? (
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">{selectedUser.full_name}</h2>
            <div className="space-y-6 bg-brand-coalition p-8 rounded-nad border border-brand-slate/20">
              <div>
                <label className="text-xs uppercase tracking-widest text-brand-yellow">Referral & Links</label>
                <p className="mt-2 text-lg">"Referred by {selectedUser.referred_by || 'Unknown'}"</p>
                <a href={selectedUser.social_media_links} target="_blank" className="text-brand-green underline block mt-2">Verification Links</a>
              </div>
              <hr className="border-brand-slate/20" />
              <div>
                <label className="text-xs uppercase tracking-widest text-brand-yellow">Affiliations</label>
                <p className="mt-2 text-brand-slate">{selectedUser.existing_affiliations}</p>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <button onClick={() => handleAction(selectedUser.id, 'approved')} className="btn-rally flex-1">Approve User</button>
              <button onClick={() => handleAction(selectedUser.id, 'deny')} className="bg-brand-red text-white font-bold py-2 px-6 rounded-nad flex-1">Deny (Soft)</button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-brand-slate">Select an application to begin vetting.</div>
        )}
      </div>
    </div>
  );
}
