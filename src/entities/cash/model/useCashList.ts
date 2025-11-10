import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cashListAction } from './cash-action'
import type { Page } from '@/shared/api'
import { useResponse } from '@/shared/lib'
import type { Cash } from './type'

export const useCashList = () => {
  const cashPage = Number(useSearchParams().get('page'))
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [cashList, setCashList] = useState<Cash[]>([])
  const [pagination, setPagination] = useState<Page>({
    currentPage: cashPage,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  })
  const handleResponse = useResponse()

  const handleGetCashList = async () => {
    setIsLoading(true)
    const response = await cashListAction(cashPage)

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

  return { cashList, pagination, isLoading }
}
