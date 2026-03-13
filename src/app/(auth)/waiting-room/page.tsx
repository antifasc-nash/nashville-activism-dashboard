export default function WaitingRoom() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="bg-brand-coalition p-10 rounded-nad border border-brand-slate/20 max-w-lg">
        <div className="animate-pulse bg-brand-yellow/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-brand-yellow text-2xl">⏳</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Application Under Review</h1>
        <p className="text-brand-slate text-lg leading-relaxed mb-6">
          Thank you for registering your interest with the Nashville Activism Dashboard! 
          We are manually reviewing your application to ensure the security of our community.
        </p>
        <p className="text-sm text-brand-slate/60">
          We will be in touch via email shortly. If you have questions, please contact 
          <span className="text-brand-yellow"> antifasc_nash@proton.me</span>.
        </p>
      </div>
    </div>
  );
}
