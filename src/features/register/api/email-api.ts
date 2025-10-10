import { axiosPost } from '@/src/shared/api/axios-client'
import type { EmailCodeType } from '../type'

export const postCreateEmailCode = async (email: string) => {
  const res = await axiosPost('/api/v1/member/email-verification', { email })
  return res
}

export const postCheckEmailCode = async (emailCodeData: EmailCodeType) => {
  const res = await axiosPost('/api/v1/member/email-validation', emailCodeData)
  return res
}

// export const postEmailCheck = async (email: string) => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/member/duplicate`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email }),
//   }).then(response => response.json())

//   return res
// }
