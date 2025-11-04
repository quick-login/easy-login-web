import { useEffect, useState } from 'react'
import { questInfoAction } from './question-action'
import { useAlertStore } from '@/src/shared/store'
import type { QuestInfo } from './types'

export const useQuest = (questionId: number) => {
  const [quest, setQuest] = useState<QuestInfo>({
    answer: '',
    answeredDate: '',
    content: '',
    questionDate: '',
    questionId: questionId,
    status: 'COMPLETED',
    title: '',
  })
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)

  const handleGetQuest = async (questionId: number) => {
    const response = await questInfoAction(questionId)
    if (response.success) {
      setQuest(response.data)
    } else {
      onOpenAlert(response.message)
    }
  }

  useEffect(() => {
    handleGetQuest(questionId)
  }, [])

  return { quest }
}
