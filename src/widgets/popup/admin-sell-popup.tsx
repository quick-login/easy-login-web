'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { AdminSellForm } from '@/features/order-sell'
import { useModalStore } from '@/shared/store'
import { Text } from '@/shared/ui'

export const AdminSellPopup = () => {
  const setModal = useModalStore(state => state.setModal)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
      setModal('isAdminSell', false)
    }
  }, [])

  return (
    <section className={'fixed inset-0 z-[1100] flex h-[100dvh] w-full items-center justify-center bg-black/50'}>
      <div className="1060:h-[600px] 1060:w-[800px] 1060:rounded-[20px] flex h-full w-full flex-col items-center justify-center bg-white">
        <div className="border-b-gray3 flex w-full items-center justify-between border-b p-[10px]">
          <Text className="text-[20px] font-bold">상품 등록</Text>
          <Image
            className="cursor-pointer"
            src="/menu.svg"
            alt="menu"
            width={24}
            height={24}
            onClick={() => setModal('isAdminSell', false)}
          />
        </div>
        <AdminSellForm />
      </div>
    </section>
  )
}
