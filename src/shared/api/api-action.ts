import { redirect } from 'next/navigation'
import { signOut } from '../../../auth'
import type { ActionResponse, ResponseType } from './types'

export const onActionResponse = async <Tdata>(response: ResponseType<Tdata>): Promise<ActionResponse<Tdata>> => {
  if (response.code === 'E4006') {
    redirect('/not-found')
  }
  if (response.code === 'U1003') {
    signOut({ redirect: true, redirectTo: '/login' })
    redirect('/login')
  } else if (response.code === 'E200') {
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
