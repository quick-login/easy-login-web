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
// import { RequestCookies, ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies'
// import { type NextRequest, NextResponse } from 'next/server'
// import { refreshPost } from './src/shared/api/refresh'

// export async function middleware(request: NextRequest): Promise<NextResponse> {
//   const isAuthenticated = await checkAuthentication(request)
//   const { pathname } = request.nextUrl

//   if (request.cookies.get('rc')) {
//     const res = await refreshToken(request)
//     return res
//   }
//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/myapp', '/create', '/login', '/register', '/api/:path*', '/'],
// }

// async function checkAuthentication(request: NextRequest) {
//   const token = request.cookies.get('rc')

//   return !!token
// }

// async function refreshToken(req: NextRequest) {
//   // const clone = req.clone()
//   // const token = await clone.json()
//   // console.log('나 호출', token)

//   const token = req.cookies.get('rc')
//   console.log('나 호출', token)

//   if (!token) return NextResponse.next()
//   console.log('??')
//   const res = NextResponse.next()

//   // const response = await tokenVerify(accessToken) // 서버에 검증하는 로직
//   // if (response.status === 401) {
//   //   const { newAccessTokne, newRefreshToken } = await refreshAccessToken(refreshToken) // 리프레쉬
//   //   res.cookies.set({
//   //     name: 'ac',
//   //     value: newAccessTokne,
//   //     httpOnly: true,
//   //     secure: process.env.NODE_ENV === 'production',
//   //   })
//   //   res.cookies.set({
//   //     name: 'rc',
//   //     value: newRefreshToken,
//   //     httpOnly: true,
//   //     secure: process.env.NODE_ENV === 'production',
//   //   })
//   //   applySetCookie(req, res)
//   // }

//   const { newAccessToken, newRefreshToken } = await refreshPost(token?.value) // 리프레쉬
//   console.log('재발급 받은 액세스', newAccessToken)
//   console.log('재발급 받은 리프레시', newRefreshToken)
//   res.cookies.set({
//     name: 'ac',
//     value: newAccessToken,
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//   })
//   res.cookies.set({
//     name: 'rc',
//     value: newRefreshToken,
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//   })
//   applySetCookie(req, res)

//   return res
// }

// function applySetCookie(req: NextRequest, res: NextResponse): void {
//   // parse the outgoing Set-Cookie header
//   const setCookies = new ResponseCookies(res.headers)
//   // Build a new Cookie header for the request by adding the setCookies
//   const newReqHeaders = new Headers(req.headers)
//   const newReqCookies = new RequestCookies(newReqHeaders)
//   setCookies.getAll().forEach(cookie => newReqCookies.set(cookie))
//   // set “request header overrides” on the outgoing response
//   NextResponse.next({ request: { headers: newReqHeaders } }).headers.forEach((value, key) => {
//     if (key === 'x-middleware-override-headers' || key.startsWith('x-middleware-request-')) {
//       res.headers.set(key, value)
//     }
//   })
// }
