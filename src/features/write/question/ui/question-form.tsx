'use client'

import { useRouter } from 'next/navigation'
import { useWriteList } from '../model/useWriteList'
import { Button, Input, TextArea } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'

export const QuestionForm = () => {
  const { handleWriteQuest } = useWriteList()
  const router = useRouter()

  return (
    <div className="flex flex-1 flex-col">
      <form action={handleWriteQuest} className="flex flex-1 flex-col gap-[10px] px-[20px] pt-[20px]">
        <Input name="title" placeholder="제목 입력" type="text" />
        <TextArea name="content" placeholder="본문 입력" className="flex flex-1" />
        <hr className="border-gray2" />
        <Footer>
          <div className="flex flex-1 justify-end gap-[10px]">
            <Button className="p-[15px]" variant="cancle" onClick={() => router.back()}>
              이전으로
            </Button>
            <Button type="submit" variant="primary" className="p-[15px]">
              등록하기
            </Button>
          </div>
        </Footer>
      </form>
    </div>
  )
}
