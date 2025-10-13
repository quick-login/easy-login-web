'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { questWriteAction } from '../model/quest-action'
import { Button, Input, Modal, Text, TextArea } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'

export const QuestionForm = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    isSuccess: false,
    message: '',
  })
  const router = useRouter()

  const QuestAction = async (formData: FormData) => {
    const res = await questWriteAction(formData)
    setModal({ isOpen: true, isSuccess: res.success, message: res.message })
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

  return (
    <div className="flex flex-1 flex-col">
      <form action={QuestAction} className="flex flex-1 flex-col gap-[10px] px-[20px] pt-[20px]">
        <Input name="title" place="제목 입력" type="text" />
        <TextArea name="content" place="본문 입력" className="flex flex-1" />
        <hr className="border-gray2" />
        <Footer>
          <div></div>
          <div className="flex gap-[10px]">
            <Button className="p-[15px]" variant="cancle" onClick={() => router.back()}>
              이전으로
            </Button>
            <Button type="submit" variant="primary" className="p-[15px]">
              등록하기
            </Button>
          </div>
        </Footer>
      </form>
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
    </div>
  )
}
