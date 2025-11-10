import { userLogoutAction } from './profile-action'
import { clearSession, useFeatureResponse } from '@/shared/lib'

export const useLogout = () => {
  const handleResponse = useFeatureResponse()

  const handleLogout = async () => {
    const response = await userLogoutAction()
    handleResponse(response, '로그아웃 되었습니다.', async () => await clearSession())
  }

  return { handleLogout }
}
