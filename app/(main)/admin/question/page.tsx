import { Suspense } from 'react'
import { AdminQuestionListPage } from '@/views'

export default async function AdminQuestList() {
  return (
    <Suspense>
      <AdminQuestionListPage />
    </Suspense>
  )
}
