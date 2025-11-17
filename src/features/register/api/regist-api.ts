import { axiosPost } from '@/shared/api'
import type { RegistType } from '../type'

export const postRegist = async (registData: RegistType) => {
  const res = await axiosPost('/api/v1/member/signup', registData)

  return res
}
