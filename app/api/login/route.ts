// import { setCookie } from 'cookies-next'
// import { NextResponse } from 'next/server'

// export const POST = async (req: Request) => {
//   try {
//     console.log('들어온 값', req.body)
//     const { accessToken, refreshToken } = await req.json()
//     console.log('들어온 액세스', accessToken)
//     console.log('들어온 리프레시', refreshToken)
//     let a = null
//     let b = null
//     if (accessToken && refreshToken) {
//       a = setCookie('ac', accessToken, {
//         path: '/',
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'lax',
//       })
//       b = setCookie('rc', refreshToken, {
//         path: '/',
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'lax',
//       })

//       return new Response('Hello, Next.js!', {
//         status: 200,
//         headers: { 'Set-Cookie': `ac=${accessToken}, rc=${refreshToken}` },
//       })
//     } else {
//       return NextResponse.json({ message: '토큰 저장 실패 | 존재하지 않음' }, { status: 400 })
//     }
//   } catch (error) {
//     console.log('저장실패')
//     return NextResponse.json({ message: '토큰 저장에 실패하였습니다.' }, { status: 500 })
//   }
// }
import axios from 'axios'
import { getCookie, setCookie } from 'cookies-next'
import { NextResponse } from 'next/server'
import type { ResponseType } from '@/src/shared/api/ky-client'

export const POST = async (req: Request) => {
  const param = await req.json()
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/member/login`, param, {
    headers: { 'Content-Type': 'application/json' },
  })

  const data: ResponseType = await response.data
  const res = NextResponse.json(data, { status: response.status })

  if (data.code === 'E200') {
    const ac = response.headers['authorization']?.replace('Bearer ', '')
    const rc = response.headers['refresh-token']?.replace('Bearer ', '')

    // setCookie('ac', ac, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
    // setCookie('rc', rc, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
    console.log('도착')
    // console.log(getCookie('ac'))
    if (ac) {
      res.cookies.set({
        name: 'ac',
        value: ac,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      })
    }
    if (rc) {
      res.cookies.set({
        name: 'rc',
        value: rc,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
      })
      return NextResponse.json({ data, token: { ac, rc } }, { status: response.status })
    }
  }
  return res
}
