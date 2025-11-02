'use client'

import { useModalStore } from '@/src/shared/store'
import { Button } from '@/src/shared/ui'

export const AdminSellModalBtn = () => {
  const setModal = useModalStore(state => state.setModal)
  return (
    <Button className="p-[15px] font-normal" onClick={() => setModal('isAdminSell', true)}>
      상품 등록
    </Button>
  )
}
