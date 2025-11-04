'use client'

import { useModalStore } from '@/shared/store'
import { Button } from '@/shared/ui'

export const AdminSellModalBtn = () => {
  const setModal = useModalStore(state => state.setModal)
  return (
    <Button className="p-[15px] font-normal" onClick={() => setModal('isAdminSell', true)}>
      상품 등록
    </Button>
  )
}
