import { Suspense } from 'react'
import { NoticeWritePage } from '@/views'

export default async function NoticeModify() {
  return (
    <Suspense>
      <NoticeWritePage />
    </Suspense>
  )
}
