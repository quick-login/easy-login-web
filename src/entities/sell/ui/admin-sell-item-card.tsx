import clsx from 'clsx'
import Image from 'next/image'
import { Button, Text } from '@/shared/ui'
import type { AdminSellItem } from '../model/type'

type AdminSellItemProps = {
  onStatus: () => void
  onRemove: () => void
} & AdminSellItem

export const AdminSellItemCard = ({
  discountRate,
  price,
  productId,
  status,
  name,
  type,
  typeDescription,
  value,
  finalPrice,
  onRemove,
  onStatus,
}: AdminSellItemProps) => {
  return (
    <article className="border-gray3 mb-[30px] flex flex-col rounded-[10px] border">
      <figure className="flex items-center justify-center overflow-hidden p-[20px]">
        <Image src={'/easyLogin.svg'} alt="상품" width={200} height={200} />
      </figure>

      <div
        className={clsx(
          'border-t-gray3 flex flex-col justify-end gap-[10px] border-t p-[10px]',
          status === 'SALE' ? 'bg-white' : 'bg-gray1',
        )}
      >
        <div className="flex">
          <Text className="bg-gray2 rounded-[5px] px-[10px] py-[5px] text-[12px] font-semibold text-black">
            {status === 'SALE' ? '판매중' : '판매중지'}
          </Text>
        </div>
        <Text className="text-[12px] font-semibold md:text-[15px]">{`${name}`}</Text>
        <Text className="text-gray5 text-[10px] font-semibold md:text-[15px]">{`${typeDescription} ${value.toLocaleString()} 개`}</Text>
        <div className="flex items-center justify-between">
          <Text
            className={clsx(
              'text-negative text-[11px] font-medium md:text-[14px]',
              discountRate ? 'visible' : 'invisible',
            )}
          >{`${discountRate}%`}</Text>

          <div className="flex items-center justify-center gap-[5px]">
            <Text
              className={clsx(
                'text-gray4 text-[8px] font-bold line-through md:text-[10px]',
                discountRate ? 'visible' : 'invisible',
              )}
            >{`${price.toLocaleString()} 원`}</Text>

            <Text className="text-[11px] font-bold md:text-[14px]">{`${finalPrice.toLocaleString()} 원`}</Text>
          </div>
        </div>
      </div>
      <div className="flex">
        {status === 'SALE' ? (
          <Button
            className="!h-[40px] flex-1 rounded-none rounded-bl-[10px] !text-[11px] md:!text-[14px]"
            onClick={onStatus}
          >
            상품 내리기
          </Button>
        ) : (
          <Button
            className="!h-[40px] flex-1 rounded-none rounded-bl-[10px] !text-[11px] md:!text-[14px]"
            onClick={onStatus}
          >
            상품 올리기
          </Button>
        )}

        <Button
          className="bg-negative !h-[40px] flex-1 rounded-none rounded-br-[10px] !text-[11px] md:!text-[14px]"
          onClick={onRemove}
        >
          삭 제
        </Button>
      </div>
    </article>
  )
}
