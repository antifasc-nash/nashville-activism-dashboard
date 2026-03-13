'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function VolunteerProgressLogger({ enrollmentId, milestones }: { enrollmentId: string, milestones: string[] }) {
  const [logText, setLogText] = useState('');
  const [completedMilestones, setCompletedMilestones] = useState<string[]>([]);

  const toggleMilestone = (milestone: string) => {
    setCompletedMilestones(prev => 
      prev.includes(milestone) ? prev.filter(m => m !== milestone) : [...prev, milestone]
    );
  };

  const submitUpdate = async () => {
    await supabase.from('project_enrollments')
      .update({ 
        progress_log: logText,
        completed_milestones: completedMilestones,
        last_logged_at: new Date()
      })
      .eq('id', enrollmentId);
    alert("Progress saved!");
  };

  return (
    <div className="bg-brand-coalition p-6 rounded-nad border border-brand-slate/20">
      <h3 className="text-brand-yellow font-bold mb-4 uppercase text-xs tracking-widest">Update Your Progress</h3>
      
      <div className="space-y-4">
        {milestones.length > 0 && (
          <div className="space-y-2 mb-6">
            <p className="text-xs text-brand-slate font-bold">Milestones</p>
            {milestones.map((m, i) => (
              <label key={i} className="flex items-center gap-3 p-2 bg-brand-navy/30 rounded border border-brand-slate/10 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="accent-brand-green" 
                  onChange={() => toggleMilestone(m)}
                />
                <span className="text-sm">{m}</span>
              </label>
            ))}
          </div>
        )}

        <div>
          <p className="text-xs text-brand-slate font-bold mb-2">Activities Completed</p>
          <textarea 
            className="w-full bg-brand-navy p-3 rounded border border-brand-slate/30 h-24 text-sm"
            placeholder="What have you worked on since your last update?"
            onChange={(e) => setLogText(e.target.value)}
          />
        </div>

        <button onClick={submitUpdate} className="btn-rally w-full">Save Update</button>
      </div>
    </div>
  );
}
