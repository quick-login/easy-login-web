'use client'

import { useRouter } from 'next/navigation'
import { useWriteList } from '../model/useWriteList'
import { Button, Footer, Input, TextArea } from '@/shared/ui'

export const QuestionForm = () => {
  const { handleSubmit } = useWriteList()
  const router = useRouter()

  return (
    <div className="flex flex-1 flex-col">
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e, new FormData(e.currentTarget))}
        className="flex flex-1 flex-col gap-[10px] px-[20px] pt-[20px]"
      >
        <Input name="title" placeholder="제목 입력" type="text" />
        <TextArea name="content" placeholder="본문 입력" className="flex flex-1" />
        <hr className="border-gray2" />
        <Footer>
          <div className="flex w-full flex-1 justify-end gap-[10px]">
            <Button className="400:w-fit w-full p-[15px]" variant="cancle" onClick={() => router.back()}>
              이전으로
            </Button>
            <Button type="submit" variant="primary" className="400:w-fit w-full p-[15px]">
              등록하기
            </Button>
          </div>
        </Footer>
      </form>
    </div>
  )
}
