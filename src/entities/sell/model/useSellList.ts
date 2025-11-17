'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { userSellItemsAction } from './sell-action'
import type { Page } from '@/shared/api'
import { useResponse } from '@/shared/lib'
import type { SellItem } from './type'

export const useSellList = () => {
  const sellPage = Number(useSearchParams().get('page'))
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [sellList, setSellList] = useState<SellItem[]>([])
  const [pagination, setPagination] = useState<Page>({
    currentPage: sellPage,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  })
  const handleResponse = useResponse()

  const handleGetSellList = async () => {
    setIsLoading(true)
    const response = await userSellItemsAction(sellPage)
    handleResponse(response, () => {
      setSellList(response.data)
      setPagination(response.pagination!)
    })

    setIsLoading(false)
  }

  useEffect(() => {
    if (sellPage === 0) return
    handleGetSellList()
    window.scrollTo(0, 0)
  }, [sellPage])

  return { sellList, pagination, isLoading }
}
