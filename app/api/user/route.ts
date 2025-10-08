import { NextResponse } from 'next/server'
import { axiosGet } from '@/src/shared/api/axios-client'

export const GET = async (req: Request) => {
  console.log('사용자 정보라우트 들어옴')
  const res = await axiosGet('api/v1/member/info')

  console.log('라우트 결과', res)

  return NextResponse.json(res, { status: 200 })
}
