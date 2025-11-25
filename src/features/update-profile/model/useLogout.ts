import { userLogoutAction } from './profile-action'
import { clearSession, useFeatureResponse } from '@/shared/lib'
import { useUserStore } from '@/shared/store'

export const useLogout = () => {
  const handleResponse = useFeatureResponse()
  const deleteSession = useUserStore(state => state.clearSession)

  const handleLogout = async () => {
    const response = await userLogoutAction()
    handleResponse(response, '로그아웃 되었습니다.', async () => {
      deleteSession()
      await clearSession()
    })
  }

  return { handleLogout }
}
