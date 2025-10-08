import { axiosPost } from '@/src/shared/api/axios-client'
import type { LoginType } from '../type'

export const postLogin = async (loginData: LoginType) => {
  const res = await axiosPost<string>('/api/v1/member/login', loginData)
  return res
}
