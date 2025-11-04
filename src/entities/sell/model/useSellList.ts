'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { userSellItemsAction } from './sell-action'
import type { Page } from '@/shared/api'
import { useAlertStore } from '@/shared/store'
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
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)

  const handleGetSellList = async () => {
    const response = await userSellItemsAction(sellPage)

    if (response.success) {
      setSellList(response.data)
      setPagination(response.pagination)
    } else {
      onOpenAlert(response.message)
    }
  }

  useEffect(() => {
    if (sellPage === 0) return
    handleGetSellList()
    window.scrollTo(0, 0)
  }, [sellPage])

  return { sellList, pagination }
}
