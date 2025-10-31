'use server'

import { getAdminCashList, getCashList } from '../api/cash-api'

export const cashListAction = async (page: number, pageSize: number = 10) => {
  const res = await getCashList(page, pageSize)

  if (res.code === 'E200') {
    return { success: true, code: res.code, message: res.message, data: res.data, pagination: res.pagination! }
  } else {
    return { success: false, code: res.code, message: res.message, data: res.data, pagination: res.pagination! }
  }
}

export const adminCashListAction = async (page: number, pageSize: number = 10) => {
  const res = await getAdminCashList(page, pageSize)

  if (res.code === 'E200') {
    return { success: true, code: res.code, message: res.message, data: res.data, pagination: res.pagination! }
  } else {
    return { success: false, code: res.code, message: res.message, data: res.data, pagination: res.pagination! }
  }
}
