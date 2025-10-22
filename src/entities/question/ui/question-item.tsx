import { LinkText, Text } from '@/src/shared/ui'
import type { Question } from '../model/types'

export const QuestionItem = ({ questionId, title, status, questionDate, content }: Question) => {
  return (
    <LinkText
      link={`/question/${questionId}`}
      className="border-gray3 flex items-center justify-between rounded-[10px] border px-[15px] py-[10px]"
    >
      <div className="flex items-center gap-[10px]">
        <Text className="bg-gray2 rounded-[5px] p-[5px] text-[10px] font-semibold text-black">
          {status === 'WAITING' ? '답변대기' : '답변완료'}
        </Text>
        <Text className="font-semibold text-black">{title}</Text>
      </div>
      <Text className="text-gray5 text-[13px] font-semibold">{questionDate}</Text>
    </LinkText>
  )
}
