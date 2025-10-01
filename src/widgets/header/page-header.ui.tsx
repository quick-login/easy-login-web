import { Text } from '@/src/shared/ui'

export const PageHeader = ({ title }: { title: string }) => {
  return (
    <header className="gap-[10px] p-[20px]">
      <Text className="text-[20px] leading-[120%] font-semibold">{title}</Text>
    </header>
  )
}
