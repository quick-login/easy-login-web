import { Text } from '@/src/shared/ui'
import type { OrderProducts } from '../model/type'

export const OrderInfoItem = ({
  discountRate,
  orderQuantity,
  price,
  productName,
  productType,
  productTypeDescription,
  value,
}: OrderProducts) => {
  return (
    <li className="border-gray3 flex flex-col gap-[10px] rounded-[10px] border px-[15px] py-[10px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <Text className="text-[15px] font-semibold text-black">{productName}</Text>
        </div>
        <div className="flex gap-[10px]">
          <div className="flex items-center justify-between gap-[20px]">
            {discountRate !== 0 && (
              <Text className="text-negative text-[13px] font-semibold">{`${discountRate} %`}</Text>
            )}
            <div className="flex items-center gap-[10px]">
              {discountRate !== 0 && (
                <Text className="text-gray5 text-[10px] font-semibold line-through">{`${price.toLocaleString()}원`}</Text>
              )}
              <Text className="text-[13px] font-semibold text-black">{`${price.toLocaleString()}원`}</Text>
              <Text className="text-[13px] font-semibold text-black">{`${orderQuantity.toLocaleString()} 개`}</Text>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[10px] text-[10px] font-semibold">
        <Text className="text-gray5 before:pr-[5px] before:content-['└']">{productTypeDescription}</Text>
        <Text className="text-gray5">{`총 ${value.toLocaleString()}개`}</Text>
      </div>
    </li>
  )
}
