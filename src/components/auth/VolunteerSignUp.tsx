'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

const PROJECT_TYPES = [
  "Web development", "Graphic design", "Social media management", "Data analysis", 
  "Writing", "Translation/Interpretation", "Policy analysis", "Legislative tracking", 
  "Canvassing", "Phone banking", "Event planning/organization", "Accounting/fundraising", 
  "Hands on", "Mobilization", "Safety/marshalls", "Other"
];

const INTEREST_TAGS = [
  "Housing & Tenants' Rights", "Transportation & Transit", "Criminal Justice Reform", 
  "Economic Equity", "Democracy & Voting Rights", "Environmental Justice", 
  "Education & Youth", "Immigrant & Refugee Rights", "LGBTQ+ Advocacy", 
  "Food Justice", "Womens' & Reproductive Health", "Health Equity & Access", 
  "Community Organizing & Event Planning", "Racial Justice"
];

export default function VolunteerSignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '', email: '', password: '',
    referral: '', affiliations: '', socialLinks: '',
    selectedSkills: [] as string[],
    selectedInterests: [] as string[],
    otherSkills: ''
  });

  const handleSignUp = async () => {
    // 1. Create the Auth User
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) return alert(error.message);

    // 2. Update the Profile with vetting info
    // (This logic will be expanded as we build out the database functions)
    setStep(4); // Move to Success Screen
  };

  return (
    <div className="max-w-xl mx-auto bg-brand-coalition p-10 rounded-nad border border-brand-slate/20 mt-20">
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Step 1: Identity & Security</h2>
          <input type="text" placeholder="Full Name or Alias" className="w-full bg-brand-navy p-3 rounded border border-brand-slate/30" 
            onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
          <input type="email" placeholder="Email Address" className="w-full bg-brand-navy p-3 rounded border border-brand-slate/30" 
            onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <input type="password" placeholder="Create Password" className="w-full bg-brand-navy p-3 rounded border border-brand-slate/30" 
            onChange={(e) => setFormData({...formData, password: e.target.value})} />
          <button onClick={() => setStep(2)} className="btn-rally w-full">Next: Vetting Info</button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Step 2: Vetting & Trust</h2>
          <p className="text-sm text-brand-slate italic">This will help us verify your identity.</p>
          <textarea placeholder="If someone referred you, please let us know who." className="w-full bg-brand-navy p-3 rounded border border-brand-slate/30"
            onChange={(e) => setFormData({...formData, referral: e.target.value})} />
          <textarea placeholder="Are you currently involved with any organizations?" className="w-full bg-brand-navy p-3 rounded border border-brand-slate/30"
            onChange={(e) => setFormData({...formData, affiliations: e.target.value})} />
          <textarea placeholder="Social Media or other verification links" className="w-full bg-brand-navy p-3 rounded border border-brand-slate/30"
            onChange={(e) => setFormData({...formData, socialLinks: e.target.value})} />
          <button onClick={() => setStep(3)} className="btn-rally w-full">Next: Skills & Interests</button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Step 3: Project Types</h2>
          <div className="flex flex-wrap gap-2">
            {PROJECT_TYPES.map(tag => (
              <button key={tag} className="px-3 py-1 bg-brand-navy border border-brand-slate/30 rounded-full text-xs hover:border-brand-yellow transition-colors"
                onClick={() => setFormData({...formData, selectedSkills: [...formData.selectedSkills, tag]})}>
                {tag}
              </button>
            ))}
          </div>
          <button onClick={handleSignUp} className="btn-rally w-full">Submit Application</button>
        </div>
      )}

      {step === 4 && (
        <div className="text-center space-y-4">
          <div className="text-brand-green text-5xl">✓</div>
          <h2 className="text-2xl font-bold">Application Received</h2>
          <p className="text-brand-slate">Thank you for registering your interest with the Nashville Activism Dashboard! We are reviewing your application and will be in touch shortly.</p>
        </div>
      )}
    </div>
  );
}
