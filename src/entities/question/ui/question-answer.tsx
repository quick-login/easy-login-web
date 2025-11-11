import { Text } from '@/shared/ui'
import type { QuestAnswer } from '../model/types'

export const QuestionAnswer = ({ answer, answeredDate }: QuestAnswer) => {
  return (
    <div className="flex flex-1 flex-col gap-[10px] p-[20px]">
      <div className="font-pretendard bg-gray1 flex min-h-[300px] flex-1 flex-col rounded-[20px] p-[15px] text-[16px]">
        <div className="flex-1 whitespace-pre-line">{answer}</div>
        <div className="flex justify-end">
          <Text className="text-gray5">{answeredDate}</Text>
        </div>
      </div>
    </div>
  )
}
