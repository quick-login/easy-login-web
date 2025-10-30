'use server'

import { postOrderSell } from '../api/order-sell-api'
import type { OrderSell } from './type'

export const orderSellAction = async (orderSell: OrderSell[]) => {
  const response = await postOrderSell(orderSell)

  if (response.code === 'E200') {
    return { success: true, message: response.message, data: response.data }
  } else {
    return { success: false, message: response.message, data: response.data }
  }
}
