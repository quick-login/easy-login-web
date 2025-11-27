import type { AdminSellItem, Order } from '@/entities/sell/model/type'
import { axiosDelete, axiosPatch, axiosPost } from '@/shared/api'
import type { AddSell, OrderSell } from '../model/type'

export const postOrderSell = async (orderSell: OrderSell[]) => {
  const response = await axiosPost<Order>(`/api/v1/order`, orderSell)
  return response
}

export const postAdminAddSell = async (AddSellItem: AddSell) => {
  const response = await axiosPost<null>(`/admin/api/v1/product`, AddSellItem)
  return response
}

export const patchAdminSellStatus = async (productId: number) => {
  const response = await axiosPatch<AdminSellItem>(`/admin/api/v1/product/change-status/${productId}`)
  return response
}

export const deleteAdminSell = async (productId: number) => {
  const response = await axiosDelete<null>(`/admin/api/v1/product/${productId}`)
  return response
}
