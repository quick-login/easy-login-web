'use client'

import { useModalStore } from '@/shared/store'
import { Button } from '@/shared/ui'

export const AdminSellModalBtn = () => {
  const setModal = useModalStore(state => state.setModal)
  return (
    <Button className="400:w-fit w-full p-[15px]" onClick={() => setModal('isAdminSell', true)}>
      상품 등록
    </Button>
  )
}
