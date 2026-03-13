import ProjectChat from '@/components/dashboard/ProjectChat';
import VolunteerProgressLogger from '@/components/dashboard/VolunteerProgressLogger';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // Logic to fetch project details from Supabase using params.id would go here
  const project = { title: "Legal Research Support", description: "Need help reviewing building codes...", milestones: ["Review Section 4", "Draft Summary"] };

  return (
    <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div>
          <h1 className="text-4xl font-extrabold mb-4">{project.title}</h1>
          <p className="text-brand-slate text-lg leading-relaxed">{project.description}</p>
        </div>

        <ProjectChat opportunityId={params.id} userId="temp-user-id" />
      </div>

      <div className="space-y-8">
        <VolunteerProgressLogger enrollmentId="temp-enrollment-id" milestones={project.milestones} />
        
        <div className="bg-brand-coalition p-6 rounded-nad border border-brand-slate/20">
          <h3 className="text-brand-yellow font-bold mb-2 uppercase text-xs tracking-widest">Organization Contact</h3>
          <p className="text-sm">Primary contact info will appear here once communication is initiated via chat.</p>
        </div>
      </div>
    </div>
  );
}
