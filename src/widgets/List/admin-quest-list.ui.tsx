'use client'
import { useSearchParams } from 'next/navigation'
import { Pagination } from './pagination.ui'
import { AdminQuestionItem, useAdminQuestList } from '@/src/entities/question'
import { RadioBtn, Text } from '@/src/shared/ui'

export const AdminQuestionList = () => {
  const { pagination, questList, handleChangeStatus } = useAdminQuestList()
  const questType = useSearchParams().get('STATUS')

  return questList.length === 0 ? (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <Text className="text-gray5 font-semibold">문의 내역이 존재하지 않습니다.</Text>
    </div>
  ) : (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <div className="flex items-center justify-between px-[10px]">
        <Text className="font-semibold text-black">접수된 문의 내역입니다.</Text>
        <div className="flex gap-[10px]">
          <RadioBtn
            title="답변 대기"
            id="WAITING"
            name="type"
            value="WAITING"
            checked={questType === 'WAITING'}
            onChange={handleChangeStatus}
          />
          <RadioBtn
            title="답변 완료"
            id="COMPLETED"
            name="type"
            value="COMPLETED"
            checked={questType === 'COMPLETED'}
            onChange={handleChangeStatus}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-[10px]">
        {questList.map(data => (
          <AdminQuestionItem
            key={data.questionId}
            title={data.title}
            questionId={data.questionId}
            content={data.content}
            name={data.name}
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
