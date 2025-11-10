import { Suspense } from 'react'
import { NoticeWritePage } from '@/views'

export default async function NoticeWrite() {
  return (
    <Suspense>
      <NoticeWritePage />
    </Suspense>
  )
}
