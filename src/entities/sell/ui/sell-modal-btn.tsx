'use client'

import { useModalStore } from '@/src/shared/store/useModalStore'
import { Button } from '@/src/shared/ui'

export const SellModalBtn = () => {
  const setModal = useModalStore(state => state.setModal)
  return (
    <Button className="p-[15px] font-normal" onClick={() => setModal('isUserSell', true)}>
      상품 주문
    </Button>
  )
}
