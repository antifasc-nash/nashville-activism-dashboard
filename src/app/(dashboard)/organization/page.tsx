import OrgProjectList from '@/components/dashboard/OrgProjectList';
import Link from 'next/link';

export default function OrganizationDashboard() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">Org Dashboard</h1>
          <p className="text-brand-slate">Manage your projects and coordinate with vetted volunteers.</p>
        </div>
        <Link href="/organization/new-project" className="btn-rally">
          + New Opportunity
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4 uppercase tracking-widest text-brand-yellow text-sm">Active Projects</h2>
          <OrgProjectList projects={[]} /> {/* Logic to fetch data will be added in integration */}
        </div>
        
        <div className="bg-brand-coalition p-6 rounded-nad border border-brand-slate/20 h-fit">
          <h2 className="text-xl font-bold mb-4">Leadership Support</h2>
          <p className="text-sm text-brand-slate mb-4">Only designated **Project Leads** receive email notifications for new sign-ups.</p>
          <button className="w-full py-2 border border-brand-slate/30 rounded text-sm hover:bg-brand-slate/5">Manage Team Roles</button>
        </div>
      </div>
    </div>
  );
}
