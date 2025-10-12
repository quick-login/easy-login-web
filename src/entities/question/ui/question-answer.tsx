import { LinkText, Text } from '@/src/shared/ui'
import type { QuestAnswer } from '../model/types'

export const QuestionAnswer = ({ answer, answeredDate }: QuestAnswer) => {
  return (
    <div className="flex flex-1 flex-col gap-[10px] p-[20px]">
      <div className="font-pretendard bg-gray1 flex flex-1 flex-col rounded-[20px] p-[15px] text-[16px]">
        <div className="flex-1">{answer}</div>
        <div className="flex justify-end">
          <Text className="text-gray5">{answeredDate}</Text>
        </div>
      </div>
    </div>
  )
}
