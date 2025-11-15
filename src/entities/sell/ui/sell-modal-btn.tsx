'use client'

import { useModalStore } from '@/shared/store'
import { Button } from '@/shared/ui'

export const SellModalBtn = () => {
  const setModal = useModalStore(state => state.setModal)
  return (
    <Button className="400:w-fit w-full p-[15px] font-normal" onClick={() => setModal('isUserSell', true)}>
      상품 주문
    </Button>
  )
}
