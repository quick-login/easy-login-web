'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { OrderInfoItem, useOrder } from '@/src/entities/sell'
import { Text } from '@/src/shared/ui'

type Props = {
  orderCode: string
  onClose: () => void
}

export const OrderPopup = ({ orderCode, onClose }: Props) => {
  const { order } = useOrder(orderCode)

  useEffect(() => {
    return () => {
      onClose()
    }
  }, [])

  return (
    <section className="fixed inset-0 z-[1100] flex h-[100vh] w-full items-center justify-center bg-black/50">
      <div className="flex h-[600px] w-[800px] min-w-[250px] flex-col items-center justify-center rounded-[20px] bg-white">
        <div className="border-b-gray3 flex w-full items-center justify-between border-b p-[20px]">
          <Text className="text-[20px] font-bold">{`${order.orderDate} 주문 상세내역`}</Text>
          <Image className="cursor-pointer" src="/menu.svg" alt="menu" width={24} height={24} onClick={onClose} />
        </div>
        <ul className="flex w-full flex-1 flex-col gap-[10px] overflow-y-scroll p-[20px]">
          {order.orderProducts.map((o, i) => (
            <OrderInfoItem
              key={i}
              discountRate={o.discountRate}
              orderQuantity={o.orderQuantity}
              price={o.price}
              productName={o.productName}
              productType={o.productType}
              productTypeDescription={o.productTypeDescription}
              value={o.value}
              finalPrice={o.finalPrice}
            />
          ))}
        </ul>
        <div className="flex h-[50px] w-full items-center justify-center gap-[10px] rounded-none rounded-b-[20px] bg-black">
          {order.totalFinalPrice !== order.totalPrice && (
            <Text className="text-gray5 text-[14px] font-medium line-through">{`${order.totalPrice.toLocaleString()}원`}</Text>
          )}
          <Text className="font-medium text-white">{`${order.totalFinalPrice!.toLocaleString()}원 주문 완료`}</Text>
        </div>
      </div>
    </section>
  )
}
