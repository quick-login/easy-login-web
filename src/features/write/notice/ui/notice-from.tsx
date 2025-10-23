'use client'

import { useRouter } from 'next/navigation'
import { useWirteList } from '../model/useWriteList'
import { Button, CheckBox, Input, TextArea } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'

export const NoticeForm = () => {
  const { data, fixed, setFixed, isEditMode, handleSubmit } = useWirteList()
  const router = useRouter()
  return (
    <div className="flex flex-1 flex-col">
      <form action={handleSubmit} className="flex flex-1 flex-col gap-[10px] px-[20px] pt-[20px]">
        <div className="flex items-center justify-between gap-[10px] px-[10px]">
          <CheckBox name="fixed" title="상단고정" checked={fixed} onChange={() => setFixed(prev => !prev)} />
        </div>
        <Input name="title" placeholder="제목 입력" type="text" defaultValue={data.title} />
        <TextArea name="content" placeholder="본문 입력" className="flex flex-1" defaultValue={data.content} />
        <hr className="border-gray2" />
        <Footer>
          <div className="flex flex-1 justify-end gap-[10px]">
            <Button className="p-[15px]" variant="cancle" onClick={() => router.back()}>
              이전으로
            </Button>
            <Button type="submit" variant="primary" className="p-[15px]">
              {isEditMode ? '수정하기' : '공지 등록'}
            </Button>
          </div>
        </Footer>
      </form>
    </div>
  )
}
