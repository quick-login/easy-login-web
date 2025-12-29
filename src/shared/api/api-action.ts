'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { clearSession } from '../lib'
import type { ActionResponse, ResponseType } from './types'

export const getIpAddress = async () => {
  const h = await headers()
  const ip = h.get('x-forwarded-for')?.split(',')[0] ?? h.get('x-real-ip')
  return ip
}

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
    const check = await getIpAddress()
    console.log('체크체크', check)
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
