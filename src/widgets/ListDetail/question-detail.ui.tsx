import { QuestionAnswer, QuestionInfo } from '@/src/entities/question'
import { DeleteQuestInfoBtn } from '@/src/features/deleteDetail'
import { Footer } from '@/src/shared/ui/Footer'

export const QuestionDetail = () => {
  return (
    <>
      <QuestionInfo
        title="제목"
        status="COMPLETED"
        questionId={1234}
        questionDate="2025-09-05T23:27:15.678639"
        content="본문"
      />
      <QuestionAnswer answer={'11'} answeredDate={'2025-09-05T23:27:15.678639'} />
      <hr className="border-gray2" />
      <Footer>
        <div></div>
        <DeleteQuestInfoBtn questionId={1234} />
      </Footer>
    </>
  )
}
