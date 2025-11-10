'use server'

import { getOrderInfo, getOrderList } from '../api/order-api'
import { onActionResponse } from '@/shared/api'

export const orderListAction = async (page: number, pageSize: number = 10) => {
  const response = await getOrderList(page, pageSize)
  return await onActionResponse(response)
}

export const orderInfoAction = async (orderCode: string) => {
  const response = await getOrderInfo(orderCode)
  return await onActionResponse(response)
}
