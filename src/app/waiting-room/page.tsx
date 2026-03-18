export default function WaitingRoomPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
      <div className="max-w-md bg-slate-900 p-8 rounded-xl border border-yellow-400/30">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">Application Under Review</h1>
        <p className="text-slate-300 mb-6 leading-relaxed">
          Thank you for stepping up to help Nashville. Because we manually verify every user to ensure the safety of our organizers, your application is currently pending.
        </p>
        <p className="text-slate-400 text-sm">
          Please check back later. We will email you once a vetter has approved your account.
        </p>
      </div>
    </div>
  );
}
