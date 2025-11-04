'use client'
import { Pagination } from './pagination.ui'
import { QuestionItem, useQuestList } from '@/entities/question'
import { Text } from '@/shared/ui'

export const QuestionList = () => {
  const { pagination, questList } = useQuestList()

  return questList.length === 0 ? (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <Text className="text-gray5 font-semibold">문의 내역이 존재하지 않습니다.</Text>
    </div>
  ) : (
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
