// import axios, { type AxiosError } from 'axios'
// import { deleteCookie, getCookie, setCookie } from 'cookies-next'
// import { cookies } from 'next/headers'
// import { NextResponse } from 'next/server'

// export const POST = async () => {
//   try {
//     const refreshToken = getCookie('rc')

//     if (!refreshToken) {
//       deleteCookie('ac', { path: '/' })
//       return NextResponse.json({ message: '인증 정보가 만료되어 로그아웃 됩니다.' }, { status: 400 })
//     }

//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/member/refresh`,
//       {},
//       {
//         headers: {
//           'Refresh-Token': `Bearer ${refreshToken}`,
//           'Content-Type': 'application/json',
//         },
//       },
//     )

//     if (response.status === 200) {
//       const newAccessToken = response.headers['authorization']?.replace('Bearer ', '')
//       const newRefreshToken = response.headers['refresh-token']?.replace('Bearer ', '')

//       const cookieStore = await cookies()
//       cookieStore.set('ac', newAccessToken, {
//         path: '/',
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'lax',
//       })
//       cookieStore.set('rc', newRefreshToken, {
//         path: '/',
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'lax',
//       })

//       return NextResponse.json({ message: '액세스 토큰 재발급 성공', newAccessToken }, { status: 200 })
//     } else {
//       return NextResponse.json({ message: '액세스 토큰 재발급 실패' }, { status: 400 })
//     }
//   } catch (error) {
//     const axiosError = error as AxiosError
//     const axiosErrorData = axiosError.response?.data
//     console.log('Error refreshing tokens : ', axiosError)
//     return NextResponse.json({ message: 'Failed to refresh token' }, { status: 401 })
//   }
// }
import axios, { type AxiosError } from 'axios'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  const { newAccessToken, newRefreshToken } = await req.json()
  console.log('라우트', newAccessToken, newRefreshToken)

  const res = NextResponse.json({ ok: true })
  res.cookies.set('ac', newAccessToken, {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  })

  res.cookies.set('rc', newRefreshToken, {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  })

  return res
}
