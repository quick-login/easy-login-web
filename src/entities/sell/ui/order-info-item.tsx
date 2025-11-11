import { Text } from '@/shared/ui'
import type { OrderProducts } from '../model/type'

export const OrderInfoItem = ({
  discountRate,
  orderQuantity,
  price,
  productName,
  productType,
  productTypeDescription,
  value,
  finalPrice,
}: OrderProducts) => {
  return (
    <li className="border-gray3 flex flex-col gap-[10px] rounded-[10px] border px-[15px] py-[10px]">
      <div className="flex w-full items-center justify-between gap-[5px]">
        <Text className="w-full truncate text-[15px] font-semibold text-black">{productName}</Text>
        <Text className="min-w-fit text-right text-[13px] font-semibold text-black">{`${orderQuantity.toLocaleString()} 개`}</Text>
      </div>
      <div className="flex items-start justify-between">
        <div className="flex gap-[5px] text-[10px] font-semibold">
          <Text className="text-gray5 before:pr-[5px] before:content-['└']">{productTypeDescription}</Text>
          <Text className="text-gray5">{`${(value * orderQuantity).toLocaleString()}회`}</Text>
        </div>
        <div className="flex gap-[10px]">
          <div className="flex items-center justify-between gap-[10px]">
            {discountRate !== 0 && (
              <Text className="text-negative text-[13px] font-semibold">{`${discountRate} %`}</Text>
            )}
            <div className="flex flex-col items-center">
              {discountRate !== 0 && (
                <Text className="text-gray5 text-[10px] font-semibold line-through">{`${price.toLocaleString()}원`}</Text>
              )}
              <Text className="text-[13px] font-semibold text-black">{`${finalPrice.toLocaleString()}원`}</Text>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
