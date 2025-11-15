import { Text } from '@/shared/ui'
import type { Notice } from '../model/types'

type Props = {
  onMove: () => void
} & Notice

export const NoticeItem = ({ createdAt, fixed, name, noticeId, title, onMove }: Props) => {
  return (
    <tr
      onClick={onMove}
      className="border-gray3 flex cursor-pointer flex-wrap items-center justify-between gap-[10px] rounded-[10px] border px-[15px] py-[10px]"
    >
      <td className="order-1 w-[50px] shrink-0" align="center">
        <Text className="text-gray5 truncate text-left text-[14px] font-medium md:text-center">{noticeId}</Text>
      </td>

      <td className="order-3 w-full overflow-hidden md:order-2 md:w-auto md:flex-1">
        <Text className="1060:whitespace-pre-line truncate font-semibold text-black">{title}</Text>
      </td>

      <td className="order-2 min-w-[80px] shrink-0 text-right md:order-3">
        <Text className="text-gray5 text-[13px] font-semibold">{createdAt}</Text>
      </td>
    </tr>
  )
}
