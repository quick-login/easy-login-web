import { redirect } from 'next/navigation'
import type { ResponseType } from '@/shared/api'
import type { Notice } from './types'

export const onNoticeList = async (page: string) => {
  const fixedResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/notice/fixed-notice`, {
    cache: 'no-store',
  })

  const fixed: ResponseType<Notice[]> = await fixedResponse.json()

  const basicResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/notice/list?page=${page}&pageSize=${10}`,
    {
      cache: 'no-store',
    },
  )
  if (!basicResponse.ok) redirect('/404')
  const basic: ResponseType<Notice[]> = await basicResponse.json()

  return { fixed, basic }
}
