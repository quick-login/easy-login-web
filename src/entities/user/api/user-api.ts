import { axiosGet } from '@/src/shared/api'
import type { UserType } from '../type'

export const getUserInfo = async () => {
  const response = await axiosGet<UserType>('api/v1/member/info')
  return response
}
