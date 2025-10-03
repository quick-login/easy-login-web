import { kyRequest } from '@/src/shared/api/ky-client'
import type { RegistType } from '../type'

// export const postRegist = async (registData: RegistType) => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/member/signup`, {
//     method: 'POST',
//     body: JSON.stringify({ registData }),
//   }).then(response => response.json())

//   return res
// }

export const postRegist = async (registData: RegistType) => {
  const res = await kyRequest('post', 'api/v1/member/signup', registData)

  return res
}
