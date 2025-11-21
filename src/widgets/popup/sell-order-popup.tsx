'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { SellListItem } from '@/entities/sell'
import { useOrderSell } from '@/features/order-sell'
import { useConfirmStore, useSellStore } from '@/shared/store'
import { Button, Text } from '@/shared/ui'

type Props = {
  onClose: () => void
}

export const SellPopup = ({ onClose }: Props) => {
  const { handleOrder } = useOrderSell()
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  const list = useSellStore(state => state.list)
  const onTotalPrice = useSellStore(state => state.onTotalPrice)
  const onPrice = useSellStore(state => state.onPrice)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
      onClose()
    }
  }, [])

  return (
    <section
      role="dialog"
      className={'fixed inset-0 z-[1100] flex h-[100dvh] w-full items-center justify-center bg-black/50'}
    >
      <div className="1060:h-[600px] 1060:w-[800px] 1060:rounded-[20px] flex h-full w-full flex-col items-center justify-center bg-white">
        <div className="border-b-gray3 flex w-full items-center justify-between border-b p-[20px]">
          <Text className="text-[20px] font-bold">상품 주문 리스트</Text>
          <Image className="cursor-pointer" src="/menu.svg" alt="menu" width={24} height={24} onClick={onClose} />
        </div>
        <ul className="flex w-full flex-1 flex-col gap-[10px] overflow-y-scroll p-[10px]">
          {list.size > 0 ? (
            Array.from(list.entries()).map(([id, sell]) => (
              <SellListItem
                discountRate={sell.discountRate}
                finalPrice={sell.finalPrice}
                name={sell.name}
                orderQuantity={sell.orderQuantity}
                price={sell.price}
                product_id={id}
                key={id}
              />
            ))
          ) : (
            <Text>담은 상품이 존재하지 않습니다.</Text>
          )}
        </ul>

        {list.size > 0 ? (
          <Button
            className="1060:rounded-b-[20px] flex w-full items-center justify-center gap-[10px] rounded-none"
            onClick={() =>
              onOpenConfirm('주문하시겠습니까?', () => {
                onClose()
                handleOrder()
              })
            }
          >
            {onPrice() !== onTotalPrice() && (
              <Text className="text-gray5 text-[14px] font-medium line-through">{`${onPrice().toLocaleString()}원`}</Text>
            )}
            {`${onTotalPrice().toLocaleString()} 원 주문하기`}
          </Button>
        ) : (
          <Button className="1060:rounded-b-[20px] w-full rounded-none" variant="noActive">
            상품을 먼저 담아주세요.
          </Button>
        )}
      </div>
    </section>
  )
}
