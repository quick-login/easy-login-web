import { NextResponse } from 'next/server'
import { setCookies } from '@/src/shared/lib/cookie'

export const POST = async (req: Request) => {
  console.log('테스트 라우트 들어옴')
  const res = NextResponse.json({ ok: true })
  res.cookies.set('test', 'test', {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  })

  return res
}
