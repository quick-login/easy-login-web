import { LinkText, Text } from '@/src/shared/ui'
import type { Order } from '../model/type'

export const OrderItem = ({ orderCode, orderDate, totalPrice }: Order) => {
  return (
    <LinkText
      href={`/order/${orderCode}`}
      className="border-gray3 flex items-center justify-between rounded-[10px] border px-[15px] py-[10px]"
    >
      <div className="flex items-center gap-[10px]">
        <Text className="bg-gray2 rounded-[5px] p-[5px] text-[10px] font-semibold text-black">상품 주문</Text>
        <Text className="font-semibold text-black">{totalPrice}</Text>
      </div>
      <Text className="text-gray5 text-[13px] font-semibold">{orderDate}</Text>
    </LinkText>
  )
}
