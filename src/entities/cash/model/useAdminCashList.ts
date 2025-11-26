import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { adminCashListAction } from './cash-action'
import type { Page } from '@/shared/api'
import { useResponse } from '@/shared/lib'
import { useItemStore } from '@/shared/store'

export const useAdminCashList = () => {
  const cashPage = Number(useSearchParams().get('page'))
  const setCashList = useItemStore(state => state.setCashList)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pagination, setPagination] = useState<Page>({
    currentPage: cashPage,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  })
  const handleResponse = useResponse()

  const handleGetCashList = async () => {
    setIsLoading(true)
    const response = await adminCashListAction(cashPage)

    handleResponse(response, () => {
      setCashList(response.data)
      setPagination(response.pagination!)
    })

    setIsLoading(false)
  }

  useEffect(() => {
    handleGetCashList()
    window.scrollTo(0, 0)
  }, [cashPage])

  return { pagination, isLoading }
}
