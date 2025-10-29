import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { orderListAction } from './order-action'
import type { Page } from '@/src/shared/api/axios-client'
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

  const handleGetOrderList = async () => {
    const response = await orderListAction(questPage)

    if (response.success) {
      setOrderList(response.data)
      setPagination(response.pagination)
    } else {
      alert('주문 내역을 받아오는데 오류가 발생했습니다.')
    }
  }

  useEffect(() => {
    handleGetOrderList()
    window.scrollTo(0, 0)
  }, [questPage])

  return { orderList, pagination }
}
