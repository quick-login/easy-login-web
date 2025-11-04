import { signOut } from 'next-auth/react'
import { userAction } from './user-action'
import type { Session } from 'next-auth'

export const useRefreshInfo = () => {
  const handleRefreshUser = async (session: Session) => {
    if (session === null || session === undefined || session.user === undefined) {
      console.log('없음', session)
      return
    }

    console.log('내 세션', session)
    const lastUpdateTime = new Date(session.user.updateAt).getTime()
    const currentTime = new Date().getTime()
    const refreshTime = 30 * 60 * 1000

    if (currentTime - lastUpdateTime >= refreshTime) {
      console.log('세션 요청')
      const response = await userAction()
      if (response.success) {
        console.log('성공')
        window.location.reload()
      } else {
        console.log('실패')
        await signOut({ redirect: true })
      }
    }
  }

  return { handleRefreshUser }
}
