import { Text } from '@/src/shared/ui'

export const AppHeader = ({ title, count }: { title: string; count: number }) => {
  return (
    <header className="gap-[10px] p-[20px]">
      <div className="flex gap-[10px]">
        <Text className="text-[20px] leading-[100%] font-semibold">{title}</Text>
        <Text className="text-gray4 text-right text-[16px] leading-[150%] font-normal">총 {count}개</Text>
      </div>
    </header>
  )
}
