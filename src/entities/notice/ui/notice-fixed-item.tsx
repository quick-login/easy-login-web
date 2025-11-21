'use client'

import { useRouter } from 'next/navigation'
import { Text } from '@/shared/ui'
import type { Notice } from '../model/types'

type Props = {
  onMove?: () => void
} & Notice

export const NoticeFixedItem = ({ createdAt, fixed, name, noticeId, title, onMove }: Props) => {
  const router = useRouter()
  return (
    <tr
      className="border-gray3 bg-gray1 flex cursor-pointer flex-wrap items-center justify-between gap-[10px] rounded-[10px] border px-[15px] py-[10px]"
      onClick={() => router.push(`/notice/${noticeId}`)}
    >
      <td className="order-1 max-w-[50px] shrink-0" align="center">
        <Text className="bg-gray2 rounded-[5px] p-[5px] text-[10px] font-semibold text-black">NOTICE</Text>
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
