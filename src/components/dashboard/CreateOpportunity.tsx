'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function CreateOpportunity({ orgId }: { orgId: string }) {
  const [isOneTime, setIsOneTime] = useState(false);
  const [milestones, setMilestones] = useState(['']);

  const addMilestone = () => setMilestones([...milestones, '']);

  return (
    <div className="bg-brand-coalition p-8 rounded-nad border border-brand-slate/20 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Post New Opportunity</h2>
      
      <div className="space-y-4">
        <input type="text" placeholder="Opportunity Title" className="w-full bg-brand-navy p-3 rounded border border-brand-slate/30" />
        <textarea placeholder="Description of activity..." className="w-full bg-brand-navy p-3 rounded border border-brand-slate/30 h-32" />
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs uppercase text-brand-yellow font-bold">Est. Hours</label>
            <input type="number" placeholder="e.g. 10" className="w-full bg-brand-navy p-3 rounded border border-brand-slate/30" />
          </div>
          <div>
            <label className="text-xs uppercase text-brand-yellow font-bold">Date Needed By</label>
            <input type="date" className="w-full bg-brand-navy p-3 rounded border border-brand-slate/30" />
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-brand-navy/50 rounded border border-brand-slate/10">
          <input type="checkbox" checked={isOneTime} onChange={() => setIsOneTime(!isOneTime)} className="accent-brand-yellow h-5 w-5" />
          <label className="text-sm font-bold">This is a One-Time Event (e.g. Protest, Rally)</label>
        </div>

        {isOneTime && (
          <input type="time" className="w-full bg-brand-navy p-3 rounded border border-brand-slate/30" />
        )}

        <div className="space-y-2">
          <label className="text-xs uppercase text-brand-yellow font-bold">Milestones (Optional)</label>
          {milestones.map((m, i) => (
            <input key={i} type="text" placeholder={`Milestone ${i+1}`} className="w-full bg-brand-navy p-2 rounded border border-brand-slate/30 text-sm" />
          ))}
          <button onClick={addMilestone} className="text-xs text-brand-yellow hover:underline">+ Add Milestone</button>
        </div>

        <button className="btn-rally w-full py-4 mt-6">Post to Dashboard</button>
      </div>
    </div>
  );
}
