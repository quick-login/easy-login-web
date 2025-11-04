'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useEffect } from 'react'
import { SellListItem } from '@/src/entities/sell'
import { useOrderSell } from '@/src/features/order-sell'
import { useConfirmStore, useSellStore } from '@/src/shared/store'
import { Button, Text } from '@/src/shared/ui'

type Props = {
  onClose: () => void
}

export const SellPopup = ({ onClose }: Props) => {
  const { handleOrder } = useOrderSell()
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  const list = useSellStore(state => state.list)
  const onTotalPrice = useSellStore(state => state.onTotalPrice)

  useEffect(() => {
    return () => {
      onClose()
    }
  }, [])

  return (
    <section className={clsx('fixed inset-0 z-[1100] flex h-[100vh] w-full items-center justify-center bg-black/50')}>
      <div className="flex h-[600px] w-[800px] min-w-[250px] flex-col items-center justify-center rounded-[20px] bg-white">
        <div className="border-b-gray3 flex w-full items-center justify-between border-b p-[20px]">
          <Text className="text-[20px] font-bold">상품 주문 리스트</Text>
          <Image className="cursor-pointer" src="/menu.svg" alt="menu" width={24} height={24} onClick={onClose} />
        </div>
        <ul className="flex w-full flex-1 flex-col gap-[10px] overflow-y-scroll p-[20px]">
          {list.size > 0 ? (
            Array.from(
              list
                .entries()
                .map(([id, sell]) => (
                  <SellListItem
                    discountRate={sell.discountRate}
                    finalPrice={sell.finalPrice}
                    name={sell.name}
                    orderQuantity={sell.orderQuantity}
                    price={sell.price}
                    product_id={id}
                    key={id}
                  />
                )),
            )
          ) : (
            <Text>담은 상품이 존재하지 않습니다.</Text>
          )}
        </ul>

        {list.size > 0 ? (
          <Button
            className="w-full rounded-none rounded-b-[20px]"
            onClick={() =>
              onOpenConfirm('주문하시겠습니까?', () => {
                onClose()
                handleOrder()
              })
            }
          >{`${onTotalPrice().toLocaleString()} 원 주문하기`}</Button>
        ) : (
          <Button className="w-full rounded-none rounded-b-[20px]" variant="noActive">
            상품을 먼저 담아주세요.
          </Button>
        )}
      </div>
    </section>
  )
}
