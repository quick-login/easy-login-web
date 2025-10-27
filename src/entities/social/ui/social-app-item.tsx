import { LinkText, Text } from '@/src/shared/ui'
import type { SocialApp } from '../model/type'

export const SocialAppItem = ({ appId, appName }: SocialApp) => {
  return (
    <LinkText
      href={`/kakao/app/${appId}`}
      className="border-gray3 flex cursor-pointer flex-col gap-[10px] rounded-[10px] border p-[15px]"
    >
      <Text className="text-gray4 text-[16px] leading-[150%] font-normal">app ID : {appId}</Text>
      <Text className="text-[20px] leading-[150%] font-semibold">{appName}</Text>
    </LinkText>
  )
}
