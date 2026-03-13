import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mb-16">
        <h1 className="font-heading text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          NASHVILLE ACTIVISM DASHBOARD
        </h1>
        <p className="text-brand-slate text-xl md:text-2xl mb-10 leading-relaxed">
          Directing energy where Nashville needs it most. A secure, vetted clearinghouse for local advocacy.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/signup/volunteer" className="btn-rally">
            Find a Project
          </Link>
          <Link href="/signup/organization" className="border-2 border-brand-yellow text-brand-yellow font-bold py-2 px-6 rounded-nad hover:bg-brand-yellow/10 transition-all">
            Post an Opportunity
          </Link>
        </div>
      </section>

      {/* About Section (The Bento Grid) */}
      <section className="grid md:grid-cols-2 gap-6 max-w-5xl mb-24">
        <div className="bg-brand-coalition p-8 rounded-nad border border-brand-slate/20">
          <h3 className="text-brand-yellow font-bold text-xl mb-3">How it Works</h3>
          <p className="text-brand-slate leading-relaxed">
            Every user and organization is manually verified. Once approved, you can match with projects based on your specific skill set.
          </p>
        </div>
        <div className="bg-brand-coalition p-8 rounded-nad border border-brand-slate/20">
          <h3 className="text-brand-yellow font-bold text-xl mb-3">Why Use NAD?</h3>
          <p className="text-brand-slate leading-relaxed">
            Don't just sign up for emails. Use your professional or organizing skills to hit specific milestones for causes you care about.
          </p>
        </div>
      </section>

      {/* Security Trust Footer */}
      <footer className="mt-auto text-center max-w-2xl border-t border-brand-slate/20 pt-10">
        <p className="text-sm text-brand-slate uppercase tracking-widest mb-4">Secured by the Community, for the Community</p>
        <p className="text-xs text-brand-slate/60 leading-relaxed">
          The Nashville Activism Dashboard is a privacy-first platform. Every user and organization is manually verified by real Nashville volunteers. Your data is encrypted and never shared with third parties.
        </p>
      </footer>
    </div>
  );
}
