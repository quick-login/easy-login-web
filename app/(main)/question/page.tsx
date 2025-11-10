import { Suspense } from 'react'
import { QuestionListPage } from '@/views'

export default async function QuestList() {
  return (
    <Suspense>
      <QuestionListPage />
    </Suspense>
  )
}
