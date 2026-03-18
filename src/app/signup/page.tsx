"use client";

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  // This connects your page securely to your Supabase database
  const supabase = createClientComponentClient();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (isLogin) {
      // LOG IN LOGIC
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setMessage(error.message);
      } else {
        // If successful, send them to the dashboard! 
        // (Middleware will intercept and send to waiting-room if pending)
        router.push('/volunteer');
        router.refresh();
      }
    } else {
      // SIGN UP LOGIC
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setMessage(error.message);
      } else {
        setMessage("Success! You can now log in to check your vetting status.");
        setIsLogin(true); // Switch to the login view so they can enter
      }
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <Link href="/" className="text-brand-slate mb-8 hover:text-white transition-colors">
        ← Back to Home
      </Link>
      
      <div className="w-full max-w-md bg-brand-coalition p-8 rounded-nad border border-brand-slate/20 shadow-xl">
        <h1 className="text-3xl font-bold text-rally-yellow mb-2 text-center">
          {isLogin ? 'Welcome Back' : 'Join the Coalition'}
        </h1>
        <p className="text-brand-slate text-center mb-8">
          {isLogin ? 'Enter your credentials to access the dashboard.' : 'Sign up to begin your vetting process.'}
        </p>

        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-brand-slate mb-1">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-vigilant-navy border border-brand-slate/30 text-white focus:border-rally-yellow outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-brand-slate mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-vigilant-navy border border-brand-slate/30 text-white focus:border-rally-yellow outline-none"
              required
            />
          </div>

          {message && (
            <div className="p-3 bg-vigilant-navy border border-rally-yellow/50 text-rally-yellow text-sm rounded">
              {message}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-rally-yellow text-vigilant-navy font-bold py-3 rounded hover:opacity-90 transition-opacity disabled:opacity-50 mt-4"
          >
            {loading ? 'Processing...' : (isLogin ? 'Log In' : 'Sign Up')}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-brand-slate">
          {isLogin ? "Don't have an account? " : "Already applied? "}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-rally-yellow font-bold hover:underline"
          >
            {isLogin ? 'Sign up here' : 'Log in here'}
          </button>
        </div>
      </div>
    </div>
  );
}
