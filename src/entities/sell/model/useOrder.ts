'use client'

import { useEffect, useState } from 'react'
import { orderInfoAction } from './order-action'
import { useAlertStore } from '@/shared/store'
import type { OrderInfo } from './type'

export const useOrder = (orderCode: string) => {
  const [order, setOrder] = useState<OrderInfo>({
    orderCode: '',
    orderDate: '',
    totalPrice: 0,
    totalFinalPrice: 0,
    orderProducts: [],
  })
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)

  const handleGetOrder = async (orderCode: string) => {
    const response = await orderInfoAction(orderCode)
    if (response.success) {
      setOrder(response.data)
    } else {
      onOpenAlert(response.message)
    }
  }

  useEffect(() => {
    handleGetOrder(orderCode)
  }, [])

  return { order }
}
