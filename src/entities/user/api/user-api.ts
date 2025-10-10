import { axiosGet, axiosPost } from '@/src/shared/api/axios-client'
import { deleteCookies } from '@/src/shared/lib/cookie'
import type { UserType } from '../type'

export const getUserInfo = async () => {
  const res = await axiosGet<UserType>('api/v1/member/info')
  return res
}

export const postLogout = async () => {
  const res = await axiosPost<null>('/api/v1/member/logout')
  if (res.code === 'E200') {
    await deleteCookies('ac')
    await deleteCookies('rc')
  }
  return res
}

// export const getUserInfo = async () => {
//   const res = await fetchFunc<string>('/api/v1/member/info', {
//     method: 'GET',
//   })

//   if (res.code === 'E200') {
//     return res
//   } else if (res.code === 'T6000' || res.code === 'T6001') {
//     const refresh = await refreshPost<null>()
//     if (refresh.code !== 'E200') {
//       //로그아웃
//       console.log('여기인가?', refresh)
//       await setCookies('testaa', 'aa')
//       await setCookies('testbb', 'bb')
//       return redirect('/login')
//     } else {
//       if (refresh.ac) await setCookies('ac', refresh.ac)
//       if (refresh.rc) await setCookies('rc', refresh.rc)

//       const retryData = await fetchRetry<string>('/api/v1/member/info', {
//         method: 'GET',
//       })
//       return retryData
//     }
//   }
//   return res
// }
