import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { adminSellItemsAction } from './sell-action'
import type { Page } from '@/src/shared/api/axios-client'
import { useAlertStore } from '@/src/shared/store/useAlertStore'
import type { AdminSellItem } from './type'

export const useAdminSellList = () => {
  const sellPage = Number(useSearchParams().get('page'))
  const [sellList, setSellList] = useState<AdminSellItem[]>([])
  const [pagination, setPagination] = useState<Page>({
    currentPage: sellPage,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  })
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)

  const handleGetAdminSellList = async () => {
    const response = await adminSellItemsAction(sellPage)

    if (response.success) {
      setSellList(response.data)
      setPagination(response.pagination)
    } else {
      onOpenAlert(response.message)
    }
  }

  useEffect(() => {
    if (sellPage === 0) return
    handleGetAdminSellList()
    window.scrollTo(0, 0)
  }, [sellPage])

  return { sellList, pagination }
}
