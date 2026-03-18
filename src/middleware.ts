import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  try {
    // 1. Get the user's current session safely
    const { data: { session } } = await supabase.auth.getSession();

    // Define which pages are locked behind the gate
    const isProtectedRoute = req.nextUrl.pathname.startsWith('/volunteer') || 
                             req.nextUrl.pathname.startsWith('/organization') || 
                             req.nextUrl.pathname.startsWith('/project');

    // 2. Not logged in? Send them to the new signup page
    if (!session && isProtectedRoute) {
      return NextResponse.redirect(new URL('/signup', req.url));
    }

    // 3. Logged in? Check their vetting status
    if (session && isProtectedRoute) {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('status')
        .eq('id', session.user.id)
        .single();

      // 4. If they are 'pending', send them to the Waiting Room
      // Note: We use your exact SQL status of 'pending'
      if (profile?.status === 'pending' && req.nextUrl.pathname !== '/waiting-room') {
        return NextResponse.redirect(new URL('/waiting-room', req.url));
      }
    }
  } catch (error) {
    console.error("Middleware crashed:", error);
    // If anything fails, safely kick them back to the homepage
    return NextResponse.redirect(new URL('/', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/volunteer/:path*', '/organization/:path*', '/project/:path*'],
};
