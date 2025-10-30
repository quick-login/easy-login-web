import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { userSellItemsAction } from './sell-action'
import type { Page } from '@/src/shared/api/axios-client'
import type { SellItem } from './type'

export const useSellList = () => {
  const sellPage = Number(useSearchParams().get('page'))
  const [sellList, setSellList] = useState<SellItem[]>([])
  const [pagination, setPagination] = useState<Page>({
    currentPage: sellPage,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  })

  const handleGetSellList = async () => {
    const response = await userSellItemsAction(sellPage)

    if (response.success) {
      setSellList(response.data)
      setPagination(response.pagination)
    } else {
      alert('상품 내역을 받아오는데 오류가 발생했습니다.')
    }
  }

  useEffect(() => {
    if (sellPage === 0) return
    handleGetSellList()
    window.scrollTo(0, 0)
  }, [sellPage])

  return { sellList, pagination }
}
