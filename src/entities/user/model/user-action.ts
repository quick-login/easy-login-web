'use server'

import { getUserInfo } from '../api/user-api'
import { onActionResponse } from '@/shared/api'

export const userAction = async () => {
  const response = await getUserInfo()
  return await onActionResponse(response)
  // if (response.code === 'E200') {
  //   return { success: true }
  // } else {
  //   return { success: false }
  // }
}
