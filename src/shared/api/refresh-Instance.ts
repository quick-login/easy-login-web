// 'use server'

// import { getCookies, setCookies } from '../lib/cookie'
// import type { ResponseType } from './axios-client'

// export interface RefreshResType<TData = unknown> extends ResponseType<TData> {
//   ac: string
//   rc: string
// }

// export const refreshPost = async <TData>(): Promise<RefreshResType<TData>> => {
//   const refreshToken = await getCookies('rc')
//   if (!refreshToken) return { code: 'T6002', message: '리프레시토큰이 존재하지 않음', data: null }
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/member/refresh`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Refresh-Token': `Bearer ${refreshToken.value}`,
//     },
//   })

//   const data: ResponseType<TData> = await response.json()

//   if (!response.ok) {
//     console.log('리프레시 요청 실패')
//     return { ...data, ac: '', rc: '' }
//   }
//   const ac = response.headers.get('authorization')?.replace('Bearer ', '')
//   const rc = response.headers.get('refresh-token')?.replace('Bearer ', '')
//   console.log('새 액세스', ac)
//   console.log('새 리프레시', rc)

//   if (ac && rc) {
//     return { ...data, ac, rc }
//   }
//   return { ...data, ac: '', rc: '' }

//   // if (ac) await setCookies('ac', ac)
//   // if (rc) await setCookies('rc', rc)
// }

// export const fetchRetry = async <TData>(
//   url: string,
//   config: RequestInit = {},
//   param?: object | string | null,
// ): Promise<ResponseType<TData>> => {
//   const accessToken = await getCookies('ac')
//   if (!accessToken) return { code: 'T6000', message: '토큰이 존재하지 않음', data: null }
//   console.log('액세스토큰 접근', accessToken)
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: accessToken.value,
//     },
//     ...config,

//     body: JSON.stringify(param),
//   })

//   const data: ResponseType<TData> = await response.json()

//   return data
// }
