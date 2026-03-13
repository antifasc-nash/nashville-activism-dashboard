'use client';
export default function OrgProjectList({ projects }: { projects: any[] }) {
  return (
    <div className="space-y-4">
      {projects.map(project => {
        // Calculate progress percentage
        const completed = project.completed_milestones?.length || 0;
        const total = project.milestones?.length || 1;
        const progress = (completed / total) * 100;

        return (
          <div key={project.id} className="bg-brand-coalition p-6 rounded-nad border border-brand-slate/20">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <span className={`text-xs px-2 py-1 rounded font-bold ${project.status === 'open' ? 'bg-brand-green/20 text-brand-green' : 'bg-brand-slate/20'}`}>
                {project.volunteers_count}/{project.volunteers_needed} Volunteers
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-brand-navy h-2 rounded-full mb-4 overflow-hidden">
              <div className="bg-brand-green h-full transition-all" style={{ width: `${progress}%` }} />
            </div>

            <div className="flex justify-between items-center text-sm">
              <p className="text-brand-slate">Lead: <span className="text-brand-paper font-bold">{project.project_lead_name || 'All Leadership'}</span></p>
              <div className="flex gap-2">
                <button className="text-xs border border-brand-slate/30 px-3 py-1 rounded hover:bg-brand-slate/10">Manage</button>
                <button className="text-xs bg-brand-paper text-brand-navy px-3 py-1 rounded font-bold">View Volunteers</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
