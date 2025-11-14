'use client'

import { signOut } from 'next-auth/react'
import { userAction } from './user-action'
import type { Session } from 'next-auth'

export const useRefreshInfo = () => {
  const handleRefreshUser = async (session: Session) => {
    if (!session?.user) {
      console.log('없음', session)
      return
    }

    console.log('내 세션', session)
    console.log('마지막 세션 업데이트', session.user.updateAt)
    const lastUpdateTime = new Date(session.user.updateAt).getTime()
    const currentTime = new Date().getTime()
    // const refreshTime = 10 * 60 * 1000
    const refreshTime = 15 * 1000

    if (currentTime - lastUpdateTime >= refreshTime) {
      console.log('세션 요청')
      const response = await userAction()
      if (response.success) {
        console.log('성공')
        window.location.reload()
      } else {
        console.log('실패')
        await signOut({ redirect: true, redirectTo: '/login' })
      }
    }
  }

  return { handleRefreshUser }
}
