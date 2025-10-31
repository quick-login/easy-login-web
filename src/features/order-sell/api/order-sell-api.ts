import { axiosDelete, axiosPatch, axiosPost } from '@/src/shared/api/axios-client'
import type { AddSell, OrderSell } from '../model/type'

export const postOrderSell = async (orderSell: OrderSell[]) => {
  const response = await axiosPost(`/api/v1/order`, orderSell)
  return response
}

export const postAdminAddSell = async (AddSellItem: AddSell) => {
  const response = await axiosPost(`/admin/api/v1/product`, AddSellItem)
  return response
}

export const patchAdminSellStatus = async (productId: number) => {
  const response = await axiosPatch(`/admin/api/v1/product/change-status/${productId}`)
  return response
}

export const deleteAdminSell = async (productId: number) => {
  const response = await axiosDelete(`/admin/api/v1/product/${productId}`)
  return response
}
