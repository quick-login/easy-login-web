'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { adminSellItemsAction } from './sell-action'
import type { Page } from '@/shared/api'
import { useResponse } from '@/shared/lib'
import { useItemStore } from '@/shared/store'

export const useAdminSellList = () => {
  const sellPage = Number(useSearchParams().get('page'))
  const setSellList = useItemStore(state => state.setSellList)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pagination, setPagination] = useState<Page>({
    currentPage: sellPage,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  })
  const handleResponse = useResponse()

  const handleGetAdminSellList = async () => {
    setIsLoading(true)
    const response = await adminSellItemsAction(sellPage)
    handleResponse(response, () => {
      setSellList(response.data)
      setPagination(response.pagination!)
    })

    setIsLoading(false)
  }

  useEffect(() => {
    if (sellPage === 0) return
    handleGetAdminSellList()
    window.scrollTo(0, 0)
  }, [sellPage])

  return { pagination, isLoading }
}
