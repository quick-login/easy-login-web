// 'use server'

// import { redirect } from 'next/navigation'
// import { fetchRetry, refreshPost } from './refresh-Instance'
// import { deleteCookies, getCookies, setCookies } from '../lib/cookie'
// import type { ResponseType } from './axios-client'

// export const fetchFunc = async <TData>(
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

//   if (data.code === 'T6000' || data.code === 'T6001') {
//     const refresh = await refreshPost<string>()

//     if (refresh.code !== 'E200') {
//       //로그아웃
//       await deleteCookies('ac')
//       await deleteCookies('rc')
//       return redirect('/')
//     } else {
//       if (refresh.ac) await setCookies('ac', refresh.ac)
//       if (refresh.rc) await setCookies('rc', refresh.rc)

//       const retryData = await fetchRetry<TData>(url, config, param)
//       return retryData
//     }
//   }

//   return data
// }

// // export const fetchGet = async <TData>(url: string, config: RequestInit = {}) => {
// //   const accessToken = await getCookies('ac')
// //   if (!accessToken) return { code: 'T6000', message: '토큰이 존재하지 않음', data: null }
// //   console.log('액세스토큰 접근', accessToken)
// //   const response: ResponseType<TData> = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
// //     method: 'GET',
// //     headers: {
// //       'Content-Type': 'application/json',
// //       Authorization: accessToken.value,
// //     },
// //     ...config,
// //   }).then(res => res.json())

// //   return response
// // }
