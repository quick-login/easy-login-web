import { Text } from '@/src/shared/ui'

export const AppList = ({ id, name }: { id: string; name: string }) => {
  return (
    <div className="border-gray3 flex cursor-pointer flex-col gap-[10px] rounded-[10px] border p-[15px]">
      <Text className="text-gray4 text-[16px] leading-[150%] font-normal">app ID : {id}</Text>
      <Text className="text-[20px] leading-[150%] font-semibold">{name}</Text>
    </div>
  )
}
