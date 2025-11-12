'use client'

import { useRouter } from 'next/navigation'
import { QuestionAnswer, QuestionInfo, useAdminQuest } from '@/entities/question'
import { AnswerForm } from '@/features/write/question'
import { Button } from '@/shared/ui'
import { Footer } from '@/shared/ui/Footer'

export const AdminQuestionDetail = ({ questionId }: { questionId: number }) => {
  const router = useRouter()
  const { quest } = useAdminQuest(questionId)
  return (
    <>
      <QuestionInfo
        title={quest.title}
        status={quest.status}
        questionId={quest.questionId}
        questionDate={quest.questionDate}
        content={quest.content}
      />
      {quest.status === 'COMPLETED' && <QuestionAnswer answer={quest.answer} answeredDate={quest.answeredDate} />}
      {quest.status === 'WAITING' && <AnswerForm questionId={questionId} />}
      <hr className="border-gray2" />
      <Footer>
        <div className="400:px-0 flex w-full items-center justify-end gap-[10px] px-[15px]">
          <Button className="400:w-fit w-full p-[15px]" variant="cancle" onClick={() => router.back()}>
            이전으로
          </Button>
          {quest.status === 'WAITING' && (
            <Button type="submit" form="answer-form" className="400:w-fit w-full p-[15px]">
              답변 등록
            </Button>
          )}
        </div>
      </Footer>
    </>
  )
}
