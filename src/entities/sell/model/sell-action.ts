'use server'

import { getAdminSellItems, getUserSellItems } from '../api/sell-api'

export const userSellItemsAction = async (page: number, pageSize: number = 8) => {
  const res = await getUserSellItems(page, pageSize)

  if (res.code === 'E200') {
    return { success: true, code: res.code, message: res.message, data: res.data, pagination: res.pagination! }
  } else {
    return { success: false, code: res.code, message: res.message, data: res.data, pagination: res.pagination! }
  }
}

export const adminSellItemsAction = async (page: number, pageSize: number = 8) => {
  const res = await getAdminSellItems(page, pageSize)

  if (res.code === 'E200') {
    return { success: true, code: res.code, message: res.message, data: res.data, pagination: res.pagination! }
  } else {
    return { success: false, code: res.code, message: res.message, data: res.data, pagination: res.pagination! }
  }
}
