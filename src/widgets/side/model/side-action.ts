'use server'

import { getCookies } from '@/src/shared/lib/cookie'

export const sideAction = async () => {
  const isCashOn = async () => {
    const token = await getCookies('rc')
    if (token) return true
    else return false
  }

  return { isCashOn }
}
