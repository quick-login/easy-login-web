'use client'

import { useEffect, useState } from 'react'
import { orderInfoAction } from './order-action'
import { useResponse } from '@/shared/lib'
import type { OrderInfo } from './type'

export const useOrder = (orderCode: string) => {
  const [order, setOrder] = useState<OrderInfo>({
    orderCode: '',
    orderDate: '',
    totalPrice: 0,
    totalFinalPrice: 0,
    orderProducts: [],
  })
  const handleResponse = useResponse()

  const handleGetOrder = async (orderCode: string) => {
    const response = await orderInfoAction(orderCode)

    handleResponse(response, () => {
      setOrder(response.data)
    })
  }

  useEffect(() => {
    handleGetOrder(orderCode)
  }, [])

  return { order }
}
