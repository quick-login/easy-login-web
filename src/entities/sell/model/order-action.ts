'use server'

import { getOrderInfo, getOrderList } from '../api/order-api'

export const orderListAction = async (page: number, pageSize: number = 10) => {
  const res = await getOrderList(page, pageSize)

  if (res.code === 'E200') {
    return { success: true, code: res.code, message: res.message, data: res.data, pagination: res.pagination! }
  } else {
    return { success: false, code: res.code, message: res.message, data: res.data, pagination: res.pagination! }
  }
}

export const orderInfoAction = async (orderCode: string) => {
  const res = await getOrderInfo(orderCode)

  if (res.code === 'E200') {
    return { success: true, code: res.code, message: res.message, data: res.data }
  } else {
    return { success: false, code: res.code, message: res.message, data: res.data }
  }
}
