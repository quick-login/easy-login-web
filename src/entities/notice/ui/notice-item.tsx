import { LinkText, Text } from '@/shared/ui'
import type { Notice } from '../model/types'

export const NoticeItem = ({ createdAt, fixed, name, noticeId, title }: Notice) => {
  return (
    <LinkText
      href={`/notice/${noticeId}`}
      className="border-gray3 flex items-center rounded-[10px] border px-[15px] py-[10px]"
    >
      <tr className="flex flex-1 items-center gap-[10px]">
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
    </LinkText>
  )
}
