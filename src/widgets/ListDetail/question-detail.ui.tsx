'use client'

import { useRouter } from 'next/navigation'
import { QuestionAnswer, QuestionInfo, useQuest } from '@/src/entities/question'
import { DeleteQuestInfoBtn } from '@/src/features/deleteDetail'
import { Button, Footer } from '@/src/shared/ui'

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
        {quest.status === 'WAITING' ? <DeleteQuestInfoBtn questionId={questionId} /> : <div />}
        <Button className="p-[15px]" variant="cancle" onClick={() => router.back()}>
          이전으로
        </Button>
      </Footer>
    </>
  )
}
