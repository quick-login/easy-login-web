import { axiosPostLogin } from '@/shared/api'
import type { LoginRes, LoginType } from '../model/type'

export const postLogin = async (loginData: LoginType) => {
  const res = await axiosPostLogin<LoginRes>('/api/v1/member/login', loginData)
  return res
}
