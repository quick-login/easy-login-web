import { axiosGet } from '@/src/shared/api/axios-client'
import type { AdminSellItem, Order, OrderInfo, SellItem } from '../model/type'

export const getUserSellItems = async (page: number, pageSize: number) => {
  const response = await axiosGet<SellItem[]>(`/api/v1/product/list?page=${page}&pageSize=${pageSize}`)
  return response
}

export const getAdminSellItems = async (page: number, pageSize: number) => {
  const response = await axiosGet<AdminSellItem[]>(`/admin/api/v1/product/list?page=${page}&pageSize=${pageSize}`)
  return response
}

export const getUserOrderList = async (page: number, pageSize: number) => {
  const response = await axiosGet<Order[]>(`/api/v1/order/list?page=${page}&pageSize=${pageSize}`)
  return response
}

export const getUserOrderInfo = async (orderCode: number) => {
  const response = await axiosGet<OrderInfo>(`/api/v1/order/${orderCode}`)
  return response
}
