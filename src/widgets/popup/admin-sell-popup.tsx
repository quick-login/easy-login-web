'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { AdminSellForm } from '@/features/order-sell'
import { useModalStore } from '@/shared/store'
import { Text } from '@/shared/ui'

export const AdminSellPopup = () => {
  const setModal = useModalStore(state => state.setModal)

  useEffect(() => {
    return () => {
      setModal('isAdminSell', false)
    }
  }, [])

  return (
    <section className={'fixed inset-0 z-[1100] flex h-[100vh] w-full items-center justify-center bg-black/50'}>
      <div className="flex h-[600px] w-[800px] min-w-[250px] flex-col items-center justify-center rounded-[20px] bg-white">
        <div className="border-b-gray3 flex w-full items-center justify-between border-b p-[20px]">
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
