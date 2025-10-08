'use server'

import { redirect } from 'next/navigation'
import { getUserInfo, postLogout } from '../api/user-api'

export const userAction = async () => {
  const res = await getUserInfo()

  if (res.code === 'E200') {
    return { success: true, code: res.code, message: res.message, data: res.data }
  } else {
    return { success: false, code: res.code, message: res.message, data: res.data }
  }
}

export const userLogoutAction = async () => {
  const res = await postLogout()

  if (res.code === 'E200') {
    redirect('/login')
  }

  return res
}
