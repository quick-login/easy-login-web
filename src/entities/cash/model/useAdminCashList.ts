import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { adminCashListAction } from './cash-action'
import type { Page } from '@/src/shared/api'
import { useAlertStore } from '@/src/shared/store'
import type { Cash } from './type'

export const useAdminCashList = () => {
  const cashPage = Number(useSearchParams().get('page'))
  const [cashList, setCashList] = useState<Cash[]>([])
  const [pagination, setPagination] = useState<Page>({
    currentPage: cashPage,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  })
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)

  const handleGetCashList = async () => {
    const response = await adminCashListAction(cashPage)

    if (response.success) {
      setCashList(response.data)
      setPagination(response.pagination)
    } else {
      onOpenAlert(response.message)
    }
  }

  useEffect(() => {
    handleGetCashList()
    window.scrollTo(0, 0)
  }, [cashPage])

  return { cashList, pagination }
}
