'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import OpportunityCard from './OpportunityCard';

export default function VolunteerOpportunityBoard() {
  const [opportunities, setOpportunities] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [hoursRange, setHoursRange] = useState([0, 40]); // Min/Max slider state

  useEffect(() => {
    const fetchOpps = async () => {
      const { data } = await supabase
        .from('opportunities')
        .select('*, organizations(org_name)')
        .eq('status', 'open')
        .order('deadline', { ascending: true }); // Prioritize urgency
      setOpportunities(data || []);
    };
    fetchOpps();
  }, []);

  // Filter Logic: Org Name, Project Type, and Estimated Hours
  const filteredOpps = opportunities.filter(opp => {
    const matchesSearch = opp.organizations.org_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          opp.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || opp.project_types.includes(selectedType);
    const matchesHours = (opp.estimated_hours >= hoursRange[0] && opp.estimated_hours <= hoursRange[1]);
    
    return matchesSearch && matchesType && matchesHours;
  });

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="bg-brand-coalition p-6 rounded-nad border border-brand-slate/20 flex flex-wrap gap-6 items-end">
        <div className="flex-1 min-w-[200px]">
          <label className="text-xs uppercase text-brand-yellow font-bold mb-2 block">Search</label>
          <input 
            type="text" 
            placeholder="Search by Org or Project..." 
            className="w-full bg-brand-navy p-2 rounded border border-brand-slate/30 text-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="w-48">
          <label className="text-xs uppercase text-brand-yellow font-bold mb-2 block">Project Type</label>
          <select 
            className="w-full bg-brand-navy p-2 rounded border border-brand-slate/30 text-sm"
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Writing">Writing</option>
            <option value="Web development">Web development</option>
            {/* Map remaining types here */}
          </select>
        </div>

        <div className="w-64">
          <label className="text-xs uppercase text-brand-yellow font-bold mb-2 block">
            Commitment: {hoursRange[0]}-{hoursRange[1]} hrs
          </label>
          <input 
            type="range" min="0" max="40" step="1"
            className="w-full accent-brand-yellow"
            onChange={(e) => setHoursRange([0, parseInt(e.target.value)])} 
          />
        </div>
      </div>

      {/* The Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOpps.map(opp => (
          <OpportunityCard key={opp.id} opportunity={opp} />
        ))}
      </div>
    </div>
  );
}
