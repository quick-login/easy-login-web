import { useEffect, useState } from 'react'

import { adminQuestInfoAction } from './question-action'
import { useAlertStore } from '@/src/shared/store/useAlertStore'
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
  })
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)

  const handleGetQuest = async (questionId: number) => {
    const response = await adminQuestInfoAction(questionId)
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
