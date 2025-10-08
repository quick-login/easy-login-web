import { redirect } from 'next/navigation'
import { axiosGet } from '@/src/shared/api/axios-client'
import { fetchFunc } from '@/src/shared/api/fetch-Instance'
import { kyGet } from '@/src/shared/api/ky-client'
import { fetchRetry, refreshPost } from '@/src/shared/api/refresh-Instance'
import { deleteCookies, setCookies } from '@/src/shared/lib/cookie'

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

export const getUserInfo = async () => {
  const res = await axiosGet('api/v1/member/info')
  return res
}

// import { kyGet } from '@/src/shared/api/ky-client'
// import { getCookies } from '@/src/shared/lib/cookie'

// export const getUserInfo = async () => {
//   const token = await getCookies('ac')
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/member/info`, {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token?.value}`,
//     },

//     next: { revalidate: 60, tags: ['user'] },
//   })

//   console.log('status:', res.status)
//   console.log('cache-control:', res.headers.get('cache-control'))

//   return res.json()
// }
