import { axiosGet } from '@/src/shared/api'
import type { AdminSellItem, SellItem } from '../model/type'

export const getUserSellItems = async (page: number, pageSize: number) => {
  const response = await axiosGet<SellItem[]>(`/api/v1/product/list?page=${page}&pageSize=${pageSize}`)
  return response
}

export const getAdminSellItems = async (page: number, pageSize: number) => {
  const response = await axiosGet<AdminSellItem[]>(`/admin/api/v1/product/list?page=${page}&pageSize=${pageSize}`)
  return response
}
