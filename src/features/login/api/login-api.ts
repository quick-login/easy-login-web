import axios from 'axios'
import type { ResponseType } from '@/src/shared/api/axios-client'
import { axiosInstance, axiosPost } from '@/src/shared/api/axios-client'
import { kyRequest } from '@/src/shared/api/ky-client'
import { setCookies } from '@/src/shared/lib/cookie'
import type { LoginType } from '../type'

export const postLogin = async (loginData: LoginType) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/member/login`, {
    method: 'POST',
    body: JSON.stringify(loginData),
  })

  const data: ResponseType<string> = await res.json()

  if (res.ok) {
    const ac = res.headers.get('authorization')?.replace('Bearer ', '')
    const rc = res.headers.get('refresh-token')?.replace('Bearer ', '')
    console.log('액세스', ac)
    console.log('리프레시', rc)

    if (ac) await setCookies('ac', ac)
    if (rc) await setCookies('rc', rc)
  }

  return data
}

// export const postLogin = async (loginData: LoginType) => {
//   // const res = await axiosPost<string>('/api/v1/member/login', loginData)
//   // return res
//   const res = await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/login`, loginData, { withCredentials: true })

//   console.log('받은결과', res.data.token)

//   await setCookies('ac', res.data.token.ac)
//   await setCookies('rc', res.data.token.rc)
//   return res.data.data
// }
