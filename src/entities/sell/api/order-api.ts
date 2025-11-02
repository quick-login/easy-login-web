import { axiosGet } from '@/src/shared/api'
import type { Order, OrderInfo } from '../model/type'

export const getOrderList = async (page: number, pageSize: number) => {
  const response = await axiosGet<Order[]>(`/api/v1/order/list?page=${page}&pageSize=${pageSize}`)
  return response
}

export const getOrderInfo = async (orderCode: string) => {
  const response = await axiosGet<OrderInfo>(`/api/v1/order/${orderCode}`)
  return response
}
