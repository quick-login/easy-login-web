import { useEffect, useState } from 'react'
import { orderInfoAction } from './order-action'
import type { OrderInfo } from './type'

export const useOrder = (orderCode: string) => {
  const [order, setOrder] = useState<OrderInfo>({
    orderCode: '',
    orderDate: '',
    totalPrice: 0,
    orderProducts: [],
  })

  const handleGetOrder = async (orderCode: string) => {
    const response = await orderInfoAction(orderCode)
    if (response.success) {
      setOrder(response.data)
    } else {
      console.log('데이터 오류')
    }
  }

  useEffect(() => {
    handleGetOrder(orderCode)
  }, [])

  return { order }
}
