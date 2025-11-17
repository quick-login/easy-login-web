import { Text } from '@/shared/ui'
import type { SocialApp } from '../model/type'

type Props = {
  onMove: () => void
} & SocialApp

export const SocialAppItem = ({ appId, appName, onMove }: Props) => {
  return (
    <tr
      className="border-gray3 flex cursor-pointer flex-col gap-[10px] rounded-[10px] border px-[15px] py-[10px]"
      onClick={onMove}
    >
      <td className="flex-1 overflow-x-hidden">
        <Text className="1060:whitespace-pre-line text-gray4 truncate text-[13px] leading-[150%] font-normal">
          app ID : {appId}
        </Text>
      </td>
      <td className="flex-1n overflow-x-hidden">
        <Text className="1060:whitespace-pre-line truncate text-[16px] leading-[150%] font-semibold">{appName}</Text>
      </td>
    </tr>
  )
}
