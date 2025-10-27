'use server'

import { getAppInfo, getMyAppList } from '../api/social-api'

export const appListAction = async () => {
  const response = await getMyAppList()

  if (response.code === 'E200') {
    return { success: true, data: response.data }
  } else {
    return { success: false, data: response.data }
  }
}

export const appInfoAction = async (appId: number) => {
  const response = await getAppInfo(appId)

  if (response.code === 'E200') {
    return { success: true, data: response.data }
  } else {
    return { success: false, data: response.data }
  }
}
