'use client'

import { useRouter } from 'next/navigation'
import { QuestionAnswer, QuestionInfo, useQuest } from '@/entities/question'
import { DeleteQuestInfoBtn } from '@/features/deleteDetail'
import { Button, Footer } from '@/shared/ui'

export const QuestionDetail = ({ questionId }: { questionId: number }) => {
  const router = useRouter()
  const { quest } = useQuest(questionId)
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

      <hr className="border-gray2" />
      <Footer>
        <div className="400:flex-row 400:px-0 flex w-full flex-col items-center justify-between gap-[10px] px-[5px]">
          <div className="400:order-none order-2 flex gap-[20px]">
            {quest.status === 'WAITING' ? <DeleteQuestInfoBtn className="order-2" questionId={questionId} /> : <div />}
          </div>
          <Button className="400:w-fit order-1 w-full p-[15px]" variant="cancle" onClick={() => router.back()}>
            이전으로
          </Button>
        </div>
      </Footer>
    </>
  )
}
