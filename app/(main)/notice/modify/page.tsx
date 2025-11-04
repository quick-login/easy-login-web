import { Suspense } from 'react'
import { NoticeWritePage } from '@/src/views'

export default async function NoticeModify() {
  return (
    <Suspense>
      <NoticeWritePage />
    </Suspense>
  )
}
