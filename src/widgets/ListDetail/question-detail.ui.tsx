'use client'

import { useEffect, useState } from 'react'
import { QuestionAnswer, QuestionInfo } from '@/src/entities/question'
import { questInfoAction } from '@/src/entities/question/model/question-action'
import type { QuestInfo } from '@/src/entities/question/model/types'
import { DeleteQuestInfoBtn } from '@/src/features/deleteDetail'
import { Footer } from '@/src/shared/ui/Footer'

export const QuestionDetail = ({ questionId }: { questionId: number }) => {
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

  return (
    <>
      <QuestionInfo
        title={quest.title}
        status={quest.status}
        questionId={quest.questionId}
        questionDate={quest.questionDate}
        content={quest.content}
      />
      {quest.answer !== null && quest.answeredDate !== null && (
        <QuestionAnswer answer={quest.answer} answeredDate={quest.answeredDate} />
      )}

      <hr className="border-gray2" />
      <Footer>
        <div></div>
        <DeleteQuestInfoBtn questionId={quest.questionId} />
      </Footer>
    </>
  )
}
