import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { adminSellItemsAction } from './sell-action'
import type { Page } from '@/src/shared/api/axios-client'
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

  const handleGetAdminSellList = async () => {
    const response = await adminSellItemsAction(sellPage)

    if (response.success) {
      setSellList(response.data)
      setPagination(response.pagination)
    } else {
      alert('상품 내역을 받아오는데 오류가 발생했습니다.')
    }
  }

  useEffect(() => {
    if (sellPage === 0) return
    handleGetAdminSellList()
    window.scrollTo(0, 0)
  }, [sellPage])

  return { sellList, pagination }
}
