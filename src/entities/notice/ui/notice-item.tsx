import { Text } from '@/shared/ui'
import type { Notice } from '../model/types'

type Props = {
  onMove: () => void
} & Notice

export const NoticeItem = ({ createdAt, fixed, name, noticeId, title, onMove }: Props) => {
  return (
    <tr
      className="border-gray3 flex cursor-pointer items-center gap-[10px] rounded-[10px] border px-[15px] py-[10px]"
      onClick={onMove}
    >
      <td className="w-[50px]" align="center">
        <Text className="text-gray5 truncate text-[14px] font-medium">{noticeId}</Text>
      </td>
      <td className="flex-1">
        <Text className="font-semibold text-black">{title}</Text>
      </td>
      <td className="px-[10px]">
        <Text className="text-gray5 text-[13px] font-semibold">{createdAt}</Text>
      </td>
    </tr>
  )
}
