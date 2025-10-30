import Image from 'next/image'
import { SellListItem } from './sell-list-item'
import { Button, Text } from '@/src/shared/ui'

export const OrderPopup = () => {
  return (
    <section className="fixed inset-0 z-[1100] flex h-[100vh] w-full items-center justify-center bg-black/50">
      <div className="flex h-[600px] w-[800px] min-w-[250px] flex-col items-center justify-center rounded-[20px] bg-white">
        <div className="border-b-gray3 flex w-full items-center justify-between border-b p-[20px]">
          <Text className="text-[20px] font-bold">상품 주문 내역 상세</Text>
          <Image className="cursor-pointer" src="/menu.svg" alt="menu" width={24} height={24} />
        </div>
        <ul className="flex w-full flex-1 flex-col gap-[10px] p-[20px]">
          <SellListItem />
        </ul>
        <div className="w-full rounded-none rounded-b-[20px]">{`원 주문하기`}</div>
      </div>
    </section>
  )
}
