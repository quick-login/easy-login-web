import clsx from 'clsx'
import Image from 'next/image'
import { Button, Text } from '@/shared/ui'
import type { SellItem } from '../model/type'

type SellItemProps = {
  isStore: boolean
  onAdd: () => void
  onRemove: () => void
} & SellItem

export const SellItemCard = ({
  discountRate,
  finalPrice,
  name,
  price,
  product_id,
  isStore,
  onAdd,
  onRemove,
}: SellItemProps) => {
  return (
    <article className="border-gray3 mb-[30px] flex flex-col rounded-[10px] border">
      <figure className="flex items-center justify-center overflow-hidden p-[20px]">
        <Image src={'/easyLogin.svg'} alt="상품" width={200} height={200} />
      </figure>

      <div className="border-t-gray3 flex flex-col justify-end gap-[10px] border-t p-[10px]">
        <Text className="text-[12px] font-semibold md:text-[15px]">{`${name}`}</Text>
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
      {isStore ? (
        <Button
          className="!h-[40px] rounded-none rounded-b-[10px] !text-[12px] md:!text-[16px]"
          variant="cancle"
          onClick={onRemove}
        >
          담기 취소
        </Button>
      ) : (
        <Button className="!h-[40px] rounded-none rounded-b-[10px] !text-[12px] md:!text-[16px]" onClick={onAdd}>
          상품 담기
        </Button>
      )}
    </article>
  )
}
