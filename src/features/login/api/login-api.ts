import { axiosPostLogin } from '@/src/shared/api/axios-client'
import type { LoginRes } from '../model/type'
import type { LoginType } from '../type'

export const postLogin = async (loginData: LoginType) => {
  const res = await axiosPostLogin<LoginRes>('/api/v1/member/login', loginData)
  return res
}
