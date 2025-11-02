import { axiosPatch, axiosPost } from '@/src/shared/api'
import type { RegistType } from '../../register'

export const patchProfile = async ({ name, password, passwordCheck }: Partial<RegistType>) => {
  const response = await axiosPatch('/api/v1/member/modify', { name, password, passwordCheck })
  return response
}

export const postLogout = async () => {
  const response = await axiosPost<null>('/api/v1/member/logout')
  return response
}
