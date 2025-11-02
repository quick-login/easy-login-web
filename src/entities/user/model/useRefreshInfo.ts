import { useSession } from 'next-auth/react'
import { userAction } from './user-action'

export const useRefreshInfo = () => {
  const { data: session } = useSession()
  const handleRefreshUser = async () => {
    if (session === null || session.user === undefined) return
    const lastUpdateTime = new Date(session.user.updateAt).getTime()
    const currentTime = new Date().getTime()
    const refreshTime = 30 * 60 * 1000

    if (currentTime - lastUpdateTime >= refreshTime) {
      const response = await userAction()
      if (response.success) {
        window.location.reload()
      }
    }
  }

  return { handleRefreshUser }
}
