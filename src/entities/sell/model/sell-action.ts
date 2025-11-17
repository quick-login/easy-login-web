'use server'

import { getAdminSellItems, getUserSellItems } from '../api/sell-api'
import { onActionResponse } from '@/shared/api'

export const userSellItemsAction = async (page: number, pageSize: number = 8) => {
  const response = await getUserSellItems(page, pageSize)
  return await onActionResponse(response)
}

export const adminSellItemsAction = async (page: number, pageSize: number = 8) => {
  const response = await getAdminSellItems(page, pageSize)
  return await onActionResponse(response)
}
