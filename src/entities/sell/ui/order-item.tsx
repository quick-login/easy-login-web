import { Text } from '@/shared/ui'
import type { Order } from '../model/type'

type Props = {
  onClick: () => void
} & Order

export const OrderItem = ({ orderCode, orderDate, totalPrice, onClick }: Props) => {
  return (
    <li
      className="border-gray3 flex cursor-pointer flex-wrap items-center justify-between gap-[10px] rounded-[10px] border px-[15px] py-[10px]"
      onClick={onClick}
    >
      <Text className="bg-gray2 order-1 max-w-[50px] shrink-0 rounded-[5px] p-[5px] text-[10px] font-semibold text-black">
        상품 주문
      </Text>
      <Text className="order-3 w-full font-semibold text-black md:order-2 md:w-auto md:flex-1">{`${totalPrice.toLocaleString()}원 차감`}</Text>

      <Text className="text-gray5 order-2 min-w-[130px] text-[13px] font-semibold md:order-3">{orderDate}</Text>
    </li>
  )
}
