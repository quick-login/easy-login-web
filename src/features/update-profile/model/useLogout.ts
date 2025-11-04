import { userLogoutAction } from './profile-action'
import { clearSession } from '@/shared/lib'
import { useAlertStore } from '@/shared/store'

export const useLogout = () => {
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)
  const handleLogout = async () => {
    const response = await userLogoutAction()

    if (response.success) {
      onOpenAlert('로그아웃 되었습니다.', async () => {
        await clearSession()
      })
    } else {
      onOpenAlert(response.message)
    }
  }

  return { handleLogout }
}
