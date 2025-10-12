import { Button, CheckBox, Input, TextArea } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'

export const NoticeForm = () => {
  return (
    <>
      <form className="flex flex-1 flex-col gap-[10px] p-[20px]">
        <div className="flex items-center justify-between gap-[10px] px-[10px]">
          <CheckBox name="fixed" title="상단고정" />
        </div>
        <Input name="title" place="제목 입력" type="text" />
        <TextArea name="content" place="본문 입력" className="flex flex-1" />
      </form>
      <hr className="border-gray2" />
      <Footer>
        <div></div>
        <Button type="button" variant="primary" className="p-[15px]">
          등록하기
        </Button>
      </Footer>
    </>
  )
}
