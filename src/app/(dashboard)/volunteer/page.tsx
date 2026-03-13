import VolunteerOpportunityBoard from '@/components/dashboard/VolunteerOpportunityBoard';

export default function VolunteerDashboard() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">Volunteer Opportunities</h1>
        <p className="text-brand-slate">Find a project that matches your skills and interests.</p>
      </header>

      <VolunteerOpportunityBoard />
    </div>
  );
}
