'use client'
import { Pagination } from './pagination.ui'
import { QuestionItem } from '@/src/entities/question'
import { useQuestList } from '@/src/entities/question/model/useQuestList'

export const QuestionList = () => {
  const { pagination, questList } = useQuestList()

  return (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <div className="flex flex-1 flex-col gap-[10px]">
        {questList.map(data => (
          <QuestionItem
            key={data.questionId}
            title={data.title}
            questionId={data.questionId}
            content={data.content}
            questionDate={data.questionDate}
            status={data.status}
          />
        ))}
      </div>

      <Pagination
        currentPage={pagination.currentPage}
        totalElements={pagination.totalElements}
        pageSize={pagination.pageSize}
        totalPages={pagination.totalPages}
      />
    </div>
  )
}
