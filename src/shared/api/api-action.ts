import { redirect } from 'next/navigation'
import { signOut } from '../../../auth'
import type { ActionResponse, ResponseType } from './types'

export const onActionResponse = async <Tdata>(
  response: ResponseType<Tdata>,
  callback?: () => void,
): Promise<ActionResponse<Tdata>> => {
  if (response.code === 'E4006') {
    console.log('1', response)
    redirect('/not-found')
  }
  if (response.code === 'U1003') {
    console.log('2', response)
    signOut({ redirect: true, redirectTo: '/login' })
    redirect('/login')
  } else if (response.code === 'E200') {
    console.log('3', response)
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
    console.log('4', response)
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
