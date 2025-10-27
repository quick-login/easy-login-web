import { axiosPatch } from '@/src/shared/api/axios-client'
import type { RegistType } from '../../register/type'

export const patchProfile = async ({ name, password, passwordCheck }: Partial<RegistType>) => {
  const response = await axiosPatch('/api/v1/member/modify', { name, password, passwordCheck })
  return response
}
