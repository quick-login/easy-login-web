import { Text } from '@/shared/ui'
import type { NoticeItem } from '../model/types'

export const NoticeInfo = ({ content, createdAt, name, noticeId, fixed, title }: NoticeItem) => {
  return (
    <div className="flex flex-1 flex-col gap-[10px] p-[20px]">
      <div className="flex flex-col gap-[10px] px-[15px]">
        <div className="flex flex-col gap-[4px]">
          <Text className="text-[20px] font-bold text-black">{title}</Text>
          <div className="flex items-center justify-between">
            <Text className="text-gray5">{name}</Text>
            <Text className="text-gray5">{createdAt}</Text>
          </div>
        </div>
        <hr className="border-gray2" />
      </div>
      <div className="font-pretendard flex-1 p-[15px] text-[16px]">{content}</div>
    </div>
  )
}
