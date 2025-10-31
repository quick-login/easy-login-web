import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cashListAction } from './cash-action'
import type { Page } from '@/src/shared/api/axios-client'
import type { Cash } from './type'

export const useCashList = () => {
  const cashPage = Number(useSearchParams().get('page'))
  const [cashList, setCashList] = useState<Cash[]>([])
  const [pagination, setPagination] = useState<Page>({
    currentPage: cashPage,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  })
  const handleGetCashList = async () => {
    const response = await cashListAction(cashPage)

    if (response.success) {
      setCashList(response.data)
      setPagination(response.pagination)
    } else {
      alert('캐시 내역을 받아오는데 오류가 발생했습니다.')
    }
  }

  useEffect(() => {
    handleGetCashList()
    window.scrollTo(0, 0)
  }, [cashPage])

  return { cashList, pagination }
}
