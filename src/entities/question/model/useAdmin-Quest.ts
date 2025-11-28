import { useEffect, useState } from 'react'
import { adminQuestInfoAction } from './question-action'
import { useResponse } from '@/shared/lib'
import type { QuestInfo } from './types'

export const useAdminQuest = (questionId: number) => {
  const [quest, setQuest] = useState<QuestInfo>({
    answer: '',
    answeredDate: '',
    content: '',
    questionDate: '',
    questionId: questionId,
    status: 'COMPLETED',
    title: '',
    name: '',
  })
  const handleResponse = useResponse()

  const handleGetQuest = async (questionId: number) => {
    const response = await adminQuestInfoAction(questionId)
    handleResponse(response, () => setQuest(response.data))
  }

  useEffect(() => {
    handleGetQuest(questionId)
  }, [])

  return { quest, setQuest }
}
