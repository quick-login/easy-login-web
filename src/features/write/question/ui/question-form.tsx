import { Button, Input, TextArea } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'
// import { useRouter } from 'next/navigation'

export const QuestionForm = () => {
  // const router = useRouter()
  return (
    <>
      <form className="flex flex-1 flex-col gap-[10px] p-[20px]">
        <Input name="title" place="제목 입력" type="text" />
        <TextArea name="content" place="본문 입력" className="flex flex-1" />
      </form>
      <hr className="border-gray2" />
      {/* <Footer>
        <div></div>
        <div className="flex gap-[10px]">
          <Button className="p-[15px]" variant="cancle">
            이전으로
          </Button>
          <Button type="button" variant="primary" className="p-[15px]">
            등록하기
          </Button>
        </div>
      </Footer> */}
    </>
  )
}
