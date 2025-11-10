'use server'

import { getUserInfo } from '../api/user-api'

export const userAction = async () => {
  const response = await getUserInfo()

  if (response.code === 'E200') {
    return { success: true }
  } else {
    return { success: false }
  }
}
