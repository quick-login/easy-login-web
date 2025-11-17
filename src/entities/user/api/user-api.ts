import { axiosGetUserInfo } from '@/shared/api/axios-client'

export const getUserInfo = async () => {
  const response = await axiosGetUserInfo('api/v1/member/info')
  return response
}
