import { type NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

const matchersForAuthAdmin = ['/notice/write', '/notice/modify', '/admin/*']
const matchersForAuthUser = ['/cash/*', '/item/*', '/question/*', '/kakao/*', '/naver/*', '/google/*', '/create/*']
const matchersForSignIn = ['/login/*', '/register/*']

function isMatch(pathname: string, urls: string[]) {
  return urls.some(url => pathname.startsWith(url.replace('/*', '')))
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = await getToken({ req: request, secret: process.env.AUTH_SECRET })

  if (isMatch(pathname, matchersForAuthAdmin)) {
    return token?.role === 'ADMIN' ? NextResponse.next() : NextResponse.redirect(new URL('/', request.url))
  }

  if (isMatch(pathname, matchersForAuthUser)) {
    return token ? NextResponse.next() : NextResponse.redirect(new URL('/login', request.url))
  }

  if (isMatch(pathname, matchersForSignIn)) {
    return token ? NextResponse.redirect(new URL('/', request.url)) : NextResponse.next()
  }
}
