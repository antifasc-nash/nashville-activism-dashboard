export default function OpportunityCard({ opportunity }: { opportunity: any }) {
  const isUrgent = new Date(opportunity.deadline).getTime() - new Date().getTime() < 172800000; // < 48 hours

  return (
    <div className={`bg-brand-coalition p-6 rounded-nad border transition-all hover:scale-[1.02] ${isUrgent ? 'border-brand-red/50' : 'border-brand-slate/20'}`}>
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] uppercase tracking-tighter text-brand-yellow font-bold bg-brand-navy px-2 py-1 rounded">
          {opportunity.organizations.org_name}
        </span>
        {isUrgent && <span className="text-[10px] bg-brand-red text-white px-2 py-1 rounded animate-pulse">Urgent</span>}
      </div>
      
      <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
      <p className="text-brand-slate text-sm line-clamp-3 mb-6">
        {opportunity.description}
      </p>

      <div className="flex justify-between items-center mt-auto pt-4 border-t border-brand-slate/10">
        <div className="text-xs text-brand-slate">
          <span className="block font-bold text-brand-paper">{opportunity.estimated_hours} Hours</span>
          Est. Commitment
        </div>
        <button className="text-xs font-bold text-brand-navy bg-brand-yellow px-4 py-2 rounded-nad hover:opacity-90">
          View Details
        </button>
      </div>
    </div>
  );
}
