import { redirect } from 'next/navigation'
import { clearSession } from '../lib'
import type { ActionResponse, ResponseType } from './types'

export const onActionResponse = async <Tdata>(
  response: ResponseType<Tdata>,
  callback?: () => void,
): Promise<ActionResponse<Tdata>> => {
  if (response.code === 'E4006') {
    redirect('/not-found')
  }
  if (response.code === 'U1003') {
    await clearSession()
    redirect('/login')
  } else if (response.code === 'E200') {
    await callback?.()
    return {
      success: true,
      code: response.code,
      message: response.message,
      data: response.data,
      pagination: response.pagination,
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
    }
  } else {
    return {
      success: false,
      code: response.code,
      message: response.message,
      data: response.data,
      pagination: response.pagination,
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
    }
  }
}
