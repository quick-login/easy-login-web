import { useEffect, useState } from 'react'

import { questInfoAction } from './question-action'
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

  const handleGetQuest = async (questionId: number) => {
    const response = await questInfoAction(questionId)
    if (response.success) {
      setQuest(response.data)
    } else {
      console.log('데이터 오류')
    }
  }

  useEffect(() => {
    handleGetQuest(questionId)
  }, [])

  return { quest }
}
