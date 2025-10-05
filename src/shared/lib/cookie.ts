'use server'

import { cookies } from 'next/headers'

export const setCookies = async (key: string, value: string) => {
  const cookieStore = await cookies()
  cookieStore.set({ name: key, value })
}

export const getCookies = async (key: string) => {
  const cookieStore = await cookies()
  return cookieStore.get(key)
}

export const deleteCookies = async (key: string) => {
  const cookieStore = await cookies()
  return cookieStore.delete(key)
}
