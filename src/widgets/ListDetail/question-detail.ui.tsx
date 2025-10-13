'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { QuestionAnswer, QuestionInfo } from '@/src/entities/question'
import { questInfoAction } from '@/src/entities/question/model/question-action'
import type { QuestInfo } from '@/src/entities/question/model/types'
import { questDeleteAction } from '@/src/features/write/question/model/quest-action'
import { Button, IconButton, Modal, Text } from '@/src/shared/ui'
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

  const [modal, setModal] = useState({
    isOpen: false,
    isSuccess: false,
    message: '',
  })
  const router = useRouter()

  const handleGetQuest = async (questionId: number) => {
    const response = await questInfoAction(questionId)
    console.log(response.data)
    if (response.success) {
      setQuest(response.data)
    } else {
      console.log('데이터 오류')
    }
  }

  const handleModalFunc = () => {
    if (modal.isSuccess) {
      router.push('/question')
    } else {
      setModal({
        isOpen: false,
        isSuccess: false,
        message: '',
      })
    }
  }

  const handleDeleteQuest = async (questionId: number) => {
    const response = await questDeleteAction(questionId)

    if (response.success) {
      setModal({ isOpen: true, isSuccess: true, message: '정상적으로 삭제되었습니다.' })
    } else {
      setModal({ isOpen: true, isSuccess: false, message: response.message })
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
        <IconButton alt="delete" title="삭제" onClick={() => handleDeleteQuest(questionId)} />
      </Footer>
      <Modal isOpen={modal.isOpen} className="rounded-[20px] bg-white p-[25px]">
        <div className="flex flex-col gap-[20px]">
          <Text className="text-dark text-[16px] font-bold">
            {modal.isSuccess ? '문의가 정상적으로 등록되었습니다.' : modal.message}
          </Text>
          <Button className="w-full gap-[10px] p-[15px]" variant="primary" onClick={handleModalFunc}>
            확인
          </Button>
        </div>
      </Modal>
    </>
  )
}
