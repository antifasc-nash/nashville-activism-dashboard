import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  
  // Initialize Supabase to check the user's cookies
  const supabase = createMiddlewareClient({ req, res });

  // 1. Get the user's current session
  const { data: { session } } = await supabase.auth.getSession();

  // Define which pages are locked behind the gate
  const isProtectedRoute = req.nextUrl.pathname.startsWith('/volunteer') || 
                           req.nextUrl.pathname.startsWith('/organization') || 
                           req.nextUrl.pathname.startsWith('/project');

  // 2. Not logged in? Boot them back to the home page
  if (!session && isProtectedRoute) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // 3. Logged in? Check their vetting status
  if (session && isProtectedRoute) {
    // Ask the database if they are approved
    const { data: profile } = await supabase
      .from('profiles')
      .select('status')
      .eq('id', session.user.id)
      .single();

    // 4. If they are 'pending', send them to the Waiting Room
    if (profile?.status === 'pending' && req.nextUrl.pathname !== '/waiting-room') {
      return NextResponse.redirect(new URL('/waiting-room', req.url));
    }
  }

  return res;
}

// Tell the bouncer which routes to actively guard
export const config = {
  matcher: ['/volunteer/:path*', '/organization/:path*', '/project/:path*'],
};
