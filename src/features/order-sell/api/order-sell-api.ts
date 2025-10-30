import { axiosPost } from '@/src/shared/api/axios-client'
import type { OrderSell } from '../model/type'

export const postOrderSell = async (orderSell: OrderSell[]) => {
  const response = await axiosPost(`/api/v1/order`, orderSell)
  return response
}
