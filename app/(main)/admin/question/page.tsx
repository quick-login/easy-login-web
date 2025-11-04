import { Suspense } from 'react'
import { AdminQuestionListPage } from '@/src/views'

export default async function AdminQuestList() {
  return (
    <Suspense>
      <AdminQuestionListPage />
    </Suspense>
  )
}
