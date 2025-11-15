import { LinkText, Text } from '@/shared/ui'
import type { Question } from '../model/types'

type Props = {
  onMove: () => void
} & Question

export const AdminQuestionItem = ({ questionId, title, name, status, questionDate, onMove }: Props) => {
  return (
    <tr
      onClick={onMove}
      className="border-gray3 flex cursor-pointer flex-wrap items-center justify-between gap-[10px] rounded-[10px] border px-[15px] py-[10px]"
    >
      <td className="order-1 max-w-[50px] shrink-0" align="center">
        <Text className="bg-gray2 rounded-[5px] p-[5px] text-[10px] font-semibold text-black">
          {status === 'WAITING' ? '답변대기' : '답변완료'}
        </Text>
      </td>

      <td className="order-3 w-full overflow-hidden md:order-2 md:w-auto md:flex-1">
        <Text className="1060:whitespace-pre-line truncate font-semibold text-black">{title}</Text>
      </td>

      <td className="order-2 min-w-[130px] shrink-0 text-right md:order-3">
        {name && <Text className="text-[11px] font-semibold text-black">{name}</Text>}
        <Text className="text-gray5 text-[11px] font-semibold">{questionDate}</Text>
      </td>
    </tr>
  )
}
