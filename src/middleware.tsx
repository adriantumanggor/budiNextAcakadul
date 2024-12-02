import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth_token')?.value
  const userRole = request.cookies.get('user_role')?.value

  // If there's no auth token and the user is not already on the login page,
  // redirect to the login page
  if (!authToken && !request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If there's an auth token and the user is trying to access the login page,
  // redirect to their role-specific dashboard
  if (authToken && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL(`/${userRole}`, request.url))
  }

  // Check role-based access
  if (authToken) {
    const decodedToken = jwt.decode(authToken) as { role: string } | null
    if (decodedToken) {
      const role = decodedToken.role
      if (role === 'admin' && !request.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/admin', request.url))
      }
      if (role === 'staff' && !request.nextUrl.pathname.startsWith('/staff')) {
        return NextResponse.redirect(new URL('/staff', request.url))
      }
      if (role === 'manager' && !request.nextUrl.pathname.startsWith('/manager')) {
        return NextResponse.redirect(new URL('/manager', request.url))
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

