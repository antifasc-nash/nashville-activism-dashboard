'use client';
import { supabase } from '@/lib/supabase';

export default function ManageTeam({ members }: { members: any[] }) {
  const toggleLead = async (id: string, currentStatus: boolean) => {
    await supabase.from('organization_members').update({ can_manage_projects: !currentStatus }).eq('id', id);
    // In a real app, this would refresh the list or use state
  };

  return (
    <div className="bg-brand-coalition p-6 rounded-nad border border-brand-slate/20">
      <h3 className="text-brand-yellow font-bold mb-6 uppercase text-xs tracking-widest">Team Roles & Notifications</h3>
      <div className="space-y-3">
        {members.map(member => (
          <div key={member.id} className="flex justify-between items-center p-3 border-b border-brand-slate/10 last:border-0">
            <div>
              <p className="text-sm font-medium">{member.profiles.full_name}</p>
              <p className="text-[10px] text-brand-slate uppercase">{member.can_manage_projects ? 'Project Lead' : 'Staff Member'}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-brand-slate">{member.can_manage_projects ? 'Receives Alerts' : 'No Alerts'}</span>
              <button 
                onClick={() => toggleLead(member.id, member.can_manage_projects)}
                className={`w-10 h-5 rounded-full relative transition-colors ${member.can_manage_projects ? 'bg-brand-green' : 'bg-brand-slate/30'}`}
              >
                <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${member.can_manage_projects ? 'right-1' : 'left-1'}`} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
