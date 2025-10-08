import { axiosPost } from '@/src/shared/api/axios-client'
import type { RegistType } from '../type'

export const postRegist = async (registData: RegistType) => {
  const res = await axiosPost('/api/v1/member/signup', registData)

  return res
}

// export const postRegist = async (registData: RegistType) => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/member/signup`, {
//     method: 'POST',
//     body: JSON.stringify({ registData }),
//   }).then(response => response.json())

//   return res
// }
