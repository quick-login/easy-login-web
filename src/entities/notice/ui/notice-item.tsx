import { LinkText, Text } from '@/src/shared/ui'
import type { Notice } from '../model/types'

export const NoticeItem = ({ createdAt, fixed, name, noticeId, title }: Notice) => {
  return (
    <LinkText
      link={`/notice/${noticeId}`}
      className="border-gray3 flex items-center justify-between rounded-[10px] border px-[15px] py-[10px]"
    >
      <div className="flex items-center gap-[10px]">
        {fixed ? (
          <Text className="bg-gray2 rounded-[5px] p-[5px] text-[10px] font-semibold text-black">NOTICE</Text>
        ) : (
          <Text className="text-gray5 font-medium">{noticeId}</Text>
        )}
        <Text className="font-semibold text-black">{title}</Text>
      </div>
      <Text className="text-gray5 text-[13px] font-semibold">{createdAt}</Text>
    </LinkText>
  )
}
