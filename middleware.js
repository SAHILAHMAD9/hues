import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

// Middleware for handling user sessions and route protection.
export async function middleware(req) {
    const res = NextResponse.next()
const supabase = createMiddlewareClient({ req, res })

    const { data: { session } } = await supabase.auth.getSession()

    const protectedRoutes = ['/checkout', '/orders', '/admin'];

    // Protect routes if user is not logged in
    if (!session && protectedRoutes.some(path => req.nextUrl.pathname.startsWith(path))) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    return res
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}