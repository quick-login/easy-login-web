import { QuestionItem } from '@/src/entities/question'

export const QuestionList = () => {
  return (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <div className="flex flex-1 flex-col gap-[10px]">
        <QuestionItem
          title="문의제목"
          questionId={1234}
          content=""
          questionDate="2025-10-11T22:13:07.628039"
          status="WAITING"
        />
        <QuestionItem
          title="문의제목"
          questionId={1235}
          content=""
          questionDate="2025-10-11T22:13:07.628039"
          status="COMPLETED"
        />
      </div>

      <div className="flex items-center justify-center">페이지네이션</div>
    </div>
  )
}
