import { Text } from '@/src/shared/ui'

export const MainFooter = () => {
  return (
    <footer className="flex justify-between px-[20px] pt-[10px] pb-[20px]">
      <Text className="text-gray4 cursor-pointer text-[14px] font-normal">문의하기</Text>
      <Text className="text-gray4 text-[14px] font-normal">copyright @ 2025 팀이름 All rights reserved.</Text>
    </footer>
  )
}
