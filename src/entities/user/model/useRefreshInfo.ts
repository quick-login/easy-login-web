'use client'

import { signOut } from 'next-auth/react'
import { userAction } from './user-action'
import type { Session } from 'next-auth'

export const useRefreshInfo = () => {
  const handleRefreshUser = async (session: Session) => {
    if (!session?.user) {
      return
    }

    const lastUpdateTime = new Date(session.user.updateAt).getTime()
    const currentTime = new Date().getTime()
    const refreshTime = 30 * 60 * 1000

    if (currentTime - lastUpdateTime >= refreshTime) {
      const response = await userAction()
      if (response.success) {
        window.location.reload()
      } else {
        await signOut({ redirect: true, redirectTo: '/login' })
      }
    }
  }

  return { handleRefreshUser }
}
