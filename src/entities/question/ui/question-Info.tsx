import { Text } from '@/shared/ui'
import type { Question } from '../model/types'

export const QuestionInfo = ({ questionId, title, status, name, questionDate, content }: Question) => {
  return (
    <div className="flex flex-1 flex-col gap-[10px] p-[10px]">
      <div className="flex flex-col gap-[10px] px-[15px]">
        <div className="flex flex-col gap-[4px]">
          <Text className="text-[20px] font-bold text-black">{title}</Text>
          <div className="flex items-center justify-between">
            <Text className="text-gray5 text-[14px]">{status === 'WAITING' ? '답변 대기' : '답변 완료'}</Text>
            <div className="flex gap-[10px] text-[14px]">
              <Text className="text-gray5">{name}</Text>
              <Text className="text-gray5">{questionDate}</Text>
            </div>
          </div>
        </div>
        <hr className="border-gray2" />
      </div>
      <div className="font-pretendard min-h-[300px] flex-1 p-[15px] text-[16px] whitespace-pre-line">{content}</div>
    </div>
  )
}
