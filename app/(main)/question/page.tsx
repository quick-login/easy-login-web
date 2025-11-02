import { Suspense } from 'react'
import { QuestionListPage } from '@/src/views'

export default async function QuestList() {
  return (
    <Suspense>
      <QuestionListPage />
    </Suspense>
  )
}
