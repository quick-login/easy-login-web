import { Suspense } from 'react'
import { NoticeWritePage } from '@/src/views'

export default async function NoticeWrite() {
  return (
    <Suspense>
      <NoticeWritePage />
    </Suspense>
  )
}
