import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 selection:bg-brand-yellow selection:text-brand-navy">
      {/* Navigation Back */}
      <Link href="/" className="text-brand-yellow text-sm font-bold uppercase tracking-widest hover:underline mb-12 block">
        ← Back to Portal
      </Link>

      <header className="mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">About the Dashboard</h1>
        <p className="text-brand-slate text-xl">Building a more resilient and connected Nashville.</p>
      </header>

      <div className="space-y-24">
        
        {/* About Us Section */}
        <section id="about-us">
          <h2 className="text-2xl font-bold text-brand-yellow uppercase tracking-wider mb-6 border-b border-brand-slate/20 pb-2">
            About Us
          </h2>
          <div className="text-brand-paper leading-relaxed space-y-4">
            <p>
              The Nashville Activism Dashboard is a volunteer-made and volunteer-run clearinghouse of specific tasks from organizations in Middle Tennessee. All postings are real needs from real organizers. All volunteers and organizers have been manually vetted to ensure everyone's safety. Please read through the community guidelines below for the expectations and ground rules. Thank you for your work!
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works">
          <h2 className="text-2xl font-bold text-brand-yellow uppercase tracking-wider mb-6 border-b border-brand-slate/20 pb-2">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-coalition p-6 rounded-nad border border-brand-slate/10">
              <span className="text-brand-yellow font-black text-4xl block mb-4">01</span>
              <h3 className="font-bold mb-2">Register & Vet</h3>
              <p className="text-sm text-brand-slate">Apply as a volunteer or organization. If you apply as an individual, you will fill out a short form that our vetters will review before granting access to the dashboard. We apologize for any delay! Organizers from the same organization will be able to see all opportunities hosted by their organization and can delegate "leads" as necessary. Our team manually verifies every applicant to maintain community trust.</p>
            </div>
            <div className="bg-brand-coalition p-6 rounded-nad border border-brand-slate/10">
              <span className="text-brand-yellow font-black text-4xl block mb-4">02</span>
              <h3 className="font-bold mb-2">Match Skills</h3>
              <p className="text-sm text-brand-slate">Opportunities are tagged based on focus, time commitment, and hosting organization. You are able to search by interest area and other needs. You will see opportunities that align with your interests and skills toward the top of the feed, along with those that are most urgent.</p>
            </div>
            <div className="bg-brand-coalition p-6 rounded-nad border border-brand-slate/10">
              <span className="text-brand-yellow font-black text-4xl block mb-4">03</span>
              <h3 className="font-bold mb-2">Take Action</h3>
              <p className="text-sm text-brand-slate">When you sign up to volunteer, you will be connected with the organizers so they can relay all the important information. You can use the chat feature on this website to communicate or feel free to share other contact information and communicate elsewhere. Please keep in close contact with the organizers and communicate if anything has changed.</p>
            </div>
          </div>
        </section>

        {/* Why Use NAD Section */}
        <section id="why-nad">
          <h2 className="text-2xl font-bold text-brand-yellow uppercase tracking-wider mb-6 border-b border-brand-slate/20 pb-2">
            Why Use NAD?
          </h2>
          <div className="text-brand-paper leading-relaxed space-y-4">
            <p>
              The Nashville Activism Dashboard exists to move beyond passive email lists. By focusing on 
              <strong> real volunteer opportunities</strong> posted by <strong>real organizations</strong>, we ensure that local organizations get the specialized help they need, and volunteers see the direct impact of their work.
            </p>
          </div>
        </section>

        {/* Community Guidelines Section */}
        <section id="guidelines">
          <h2 className="text-2xl font-bold text-brand-yellow uppercase tracking-wider mb-6 border-b border-brand-slate/20 pb-2">
            Community Guidelines
          </h2>
          <div className="bg-brand-coalition/30 p-8 rounded-nad border border-brand-red/20 text-brand-paper">
            <p className="italic text-brand-slate mb-6">
              All members of the Nashville Activism Dashboard are expected to adhere to the following standards. If you violate these rules, you will be removed from the platform.
            </p>
            <ol className="list-decimal list-inside space-y-4 text-brand-paper leading-relaxed">
              <li>Respect everyone. Harassment, abuse, and general meanness will not be tolerated. We are all on the same team, please be kind to each other.</li>
              <li>Be truthful. Because there may be sensitive information shared here, we need to make sure everyone is who they say they are and is representing themselves truthfully. If we find that you have misled us about who you are, we will have to remove you. NOTE: Aliases are fine, just make it clear. Use aliases that would not be mistaken for a person's name.</li>
              <li>Act in good faith. We know things change and you may have signed up for an opportunity that you are no longer able to complete. This is fine, just communicated that with the organizers.</li>
            </ol>
          </div>
        </section>
      </div>

      <footer className="mt-32 pt-10 border-t border-brand-slate/10 text-center">
        <Link href="/signup/volunteer" className="btn-rally">
          Join the Community
        </Link>
      </footer>
    </div>
  );
}
