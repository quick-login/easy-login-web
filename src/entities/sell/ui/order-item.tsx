import { Text } from '@/shared/ui'
import type { Order } from '../model/type'

type Props = {
  onClick: () => void
} & Order

export const OrderItem = ({ orderCode, orderDate, totalPrice, onClick }: Props) => {
  return (
    <li
      className="border-gray3 flex cursor-pointer items-center justify-between rounded-[10px] border px-[15px] py-[10px]"
      onClick={onClick}
    >
      <div className="flex items-center gap-[10px]">
        <Text className="bg-gray2 rounded-[5px] p-[5px] text-[10px] font-semibold text-black">상품 주문</Text>
        <Text className="font-semibold text-black">{`${totalPrice.toLocaleString()}원 차감`}</Text>
      </div>
      <Text className="text-gray5 text-[13px] font-semibold">{orderDate}</Text>
    </li>
  )
}
