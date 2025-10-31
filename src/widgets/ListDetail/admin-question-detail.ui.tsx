'use client'

import { useRouter } from 'next/navigation'
import { QuestionAnswer, QuestionInfo } from '@/src/entities/question'
import { useAdminQuest } from '@/src/entities/question/model/useAdmin-Quest'
import { AnswerForm } from '@/src/features/write/question'
import { Button } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'

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
        <div className="flex w-full items-center justify-end gap-[10px]">
          <Button className="p-[15px]" variant="cancle" onClick={() => router.back()}>
            이전으로
          </Button>
          {quest.status === 'WAITING' && (
            <Button type="submit" form="answer-form" className="p-[15px]">
              답변 등록
            </Button>
          )}
        </div>
      </Footer>
    </>
  )
}
