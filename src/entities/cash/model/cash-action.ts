'use server'

import { getAdminCashList, getCashList } from '../api/cash-api'
import { onActionResponse } from '@/shared/api'

export const cashListAction = async (page: number, pageSize: number = 10) => {
  const response = await getCashList(page, pageSize)
  return await onActionResponse(response)
}

export const adminCashListAction = async (page: number, pageSize: number = 10) => {
  const response = await getAdminCashList(page, pageSize)
  return await onActionResponse(response)
}
