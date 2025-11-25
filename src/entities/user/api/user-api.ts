import type { UserType } from '@/shared/api'
import { axiosGet } from '@/shared/api/axios-client'

export const getUserInfo = async () => {
  const response = await axiosGet<UserType>('api/v1/member/info')
  return response
}
