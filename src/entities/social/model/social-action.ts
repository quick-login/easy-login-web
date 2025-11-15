'use server'

import { getAppInfo, getMyAppList } from '../api/social-api'
import { onActionResponse } from '@/shared/api'

export const appListAction = async () => {
  const response = await getMyAppList()
  return await onActionResponse(response)
}

export const appInfoAction = async (appId: number) => {
  const response = await getAppInfo(appId)
  return await onActionResponse(response)
}
