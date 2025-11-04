'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { orderListAction } from './order-action'
import type { Page } from '@/src/shared/api'
import { useAlertStore } from '@/src/shared/store'
import type { Order } from './type'

export const useOrderList = () => {
  const questPage = Number(useSearchParams().get('page'))
  const [orderList, setOrderList] = useState<Order[]>([])
  const [pagination, setPagination] = useState<Page>({
    currentPage: questPage,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  })
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)

  const handleGetOrderList = async () => {
    const response = await orderListAction(questPage)

    if (response.success) {
      setOrderList(response.data)
      setPagination(response.pagination)
    } else {
      onOpenAlert(response.message)
    }
  }

  useEffect(() => {
    handleGetOrderList()
    window.scrollTo(0, 0)
  }, [questPage])

  return { orderList, pagination }
}
