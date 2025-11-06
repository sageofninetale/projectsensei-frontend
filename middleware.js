import { NextResponse } from 'next/server';

const PUBLIC = ['/login','/auth/callback','/favicon.ico','/_next','/images','/public'];

export async function middleware(req) {
  const { pathname } = new URL(req.url);

  if (
    PUBLIC.some(p => pathname === p || pathname.startsWith(p + '/')) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/public')
  ) {
    return NextResponse.next();
  }

  const res = NextResponse.next();
  const { createMiddlewareClient } = await import('@supabase/auth-helpers-nextjs'); // lazy import (Edge-safe)
  const supabase = createMiddlewareClient({ req, res });
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    const url = new URL('/login', req.url);
    url.searchParams.set('redirectTo', pathname || '/');
    return NextResponse.redirect(url);
  }
  return res;
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
