'use server'

import { cookies } from 'next/headers'

export const setCookies = async (key: string, value: string) => {
  const cookieStore = await cookies()
  cookieStore.set({ name: key, value, httpOnly: true, secure: true, maxAge: 60 * 60 * 24 })
}

export const getCookies = async (key: string) => {
  const cookieStore = await cookies()
  return cookieStore.get(key)
}
