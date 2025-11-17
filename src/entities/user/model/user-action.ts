'use server'

import { getUserInfo } from '../api/user-api'
import { onActionResponse } from '@/shared/api'

export const userAction = async () => {
  const response = await getUserInfo()
  return await onActionResponse(response)
}
