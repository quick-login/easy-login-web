import { axiosGet } from '@/shared/api'
import { axiosGetUserInfo } from '@/shared/api/axios-client'
import type { UserType } from '../model/type'

// export const getUserInfo = async () => {
//   const response = await axiosGet<UserType>('api/v1/member/info')
//   return response
// }

export const getUserInfo = async () => {
  const response = await axiosGetUserInfo('api/v1/member/info')
  console.log('응답', response)
  return response
}
