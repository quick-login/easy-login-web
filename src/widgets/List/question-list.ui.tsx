'use client'

import { useEffect, useState } from 'react'
import { QuestionItem } from '@/src/entities/question'
import { questListAction } from '@/src/entities/question/model/question-action'
import type { Question } from '@/src/entities/question/model/types'

export const QuestionList = () => {
  const [questList, setQuestList] = useState<Question[]>([])

  const handleGetQuestList = async () => {
    const response = await questListAction(1, 10)

    if (response.success) {
      setQuestList(response.data)
    }
  }

  useEffect(() => {
    handleGetQuestList()
  }, [])

  return (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <div className="flex flex-1 flex-col gap-[10px]">
        {questList.map(data => (
          <QuestionItem
            key={data.questionId}
            title={data.title}
            questionId={data.questionId}
            content={data.content}
            questionDate={data.questionDate}
            status={data.status}
          />
        ))}
      </div>

      <div className="flex items-center justify-center">페이지네이션</div>
    </div>
  )
}
