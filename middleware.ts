import { type NextRequest, NextResponse } from 'next/server'

async function checkAuthentication(request: NextRequest) {
  const token = request.cookies.get('rc')

  return !!token
}

export async function middleware(request: NextRequest) {
  const isAuthenticated = await checkAuthentication(request)
  const { pathname } = request.nextUrl

  const authRoute = ['/login', '/register']
  //인증된 유저 auth관련 페이지 접근 => 에러페이지
  if (authRoute.some(route => pathname.startsWith(route)) && isAuthenticated) {
    return NextResponse.redirect(new URL('/error', request.url))
  }

  // 인증안된 유저 보호 페이지 접근 => 로그인페이지
  const protectedRoute = ['/myapp', '/create']
  if (protectedRoute.some(route => pathname.startsWith(route)) && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/myapp', '/create', '/login', '/register'],
}
