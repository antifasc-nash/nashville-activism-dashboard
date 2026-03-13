'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function OrgMemberVetting({ orgId }: { orgId: string }) {
  const [pendingMembers, setPendingMembers] = useState<any[]>([]);

  const fetchPending = async () => {
    const { data } = await supabase
      .from('organization_members')
      .select('*, profiles(full_name, email)')
      .eq('org_id', orgId)
      .eq('member_status', 'pending_approval');
    setPendingMembers(data || []);
  };

  const updateStatus = async (id: string, status: 'active') => {
    await supabase.from('organization_members').update({ member_status: status }).eq('id', id);
    fetchPending();
  };

  useEffect(() => { fetchPending(); }, [orgId]);

  return (
    <div className="bg-brand-coalition p-6 rounded-nad border border-brand-slate/20">
      <h3 className="text-brand-yellow font-bold mb-6 uppercase text-xs tracking-widest">Pending Leadership Access</h3>
      
      {pendingMembers.length === 0 ? (
        <p className="text-sm text-brand-slate">No pending requests for this organization.</p>
      ) : (
        <div className="space-y-4">
          {pendingMembers.map(member => (
            <div key={member.id} className="p-4 bg-brand-navy/50 rounded-nad border border-brand-slate/10">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold">{member.profiles.full_name}</p>
                  <p className="text-xs text-brand-slate">{member.profiles.email}</p>
                </div>
                <button 
                  onClick={() => updateStatus(member.id, 'active')}
                  className="bg-brand-green text-brand-navy font-bold px-3 py-1 rounded-nad text-xs hover:opacity-90"
                >
                  Approve Access
                </button>
              </div>
              <div className="bg-brand-navy p-3 rounded text-xs border border-brand-slate/20 italic">
                <span className="block text-brand-yellow font-bold mb-1 not-italic">Proof of Affiliation provided:</span>
                "{member.proof_of_affiliation || 'No text provided.'}"
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
