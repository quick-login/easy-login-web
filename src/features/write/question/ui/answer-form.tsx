'use client'

import { useAdminAnswer } from '../model/useAdmin-Answer'
import type { QuestInfo } from '@/entities/question'
import { TextArea } from '@/shared/ui'
import type { Dispatch, SetStateAction } from 'react'

type Props = {
  setQuest: Dispatch<SetStateAction<QuestInfo>>
  questionId: number
}

export const AnswerForm = ({ questionId, setQuest }: Props) => {
  const { handleSubmit } = useAdminAnswer(questionId, setQuest)
  return (
    <form
      id="answer-form"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e, new FormData(e.currentTarget))}
      className="flex min-h-[300px] flex-1 flex-col gap-[10px] p-[20px]"
    >
      <TextArea name="answer" placeholder="답변 입력" className="flex flex-1" />
    </form>
  )
}
