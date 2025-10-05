'use server'

import { getUserInfo } from '../api/user-api'

export const userAction = async () => {
  const res = await getUserInfo()

  if (res.code === 'E200') {
    return { success: true, code: res.code, message: res.message, data: res.data }
  } else {
    return { success: false, code: res.code, message: res.message, data: res.data }
  }
}
