import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const { data: { session } } = await supabase.auth.getSession();

  // If logged in, check their vetting status
  if (session) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('status')
      .eq('id', session.user.id)
      .single();

    // If pending, redirect to waiting room unless they are already there
    if (profile?.status === 'pending' && !req.nextUrl.pathname.startsWith('/waiting-room')) {
      return NextResponse.redirect(new URL('/waiting-room', req.url));
    }
  }

  return res;
}

export const config = {
  matcher: ['/dashboard/:path*'], // Only protect dashboard routes
};
