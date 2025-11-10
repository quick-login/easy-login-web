'use client'

import { useAdminAnswer } from '../model/useAdmin-Answer'
import { TextArea } from '@/shared/ui'

export const AnswerForm = ({ questionId }: { questionId: number }) => {
  const { handleSubmit } = useAdminAnswer(questionId)
  return (
    <form
      id="answer-form"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e, new FormData(e.currentTarget))}
      className="flex flex-1 flex-col gap-[10px] p-[20px]"
    >
      <TextArea name="answer" placeholder="답변 입력" className="flex flex-1" />
    </form>
  )
}
