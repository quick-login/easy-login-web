import { kyGet } from '@/src/shared/api/ky-client'

export const getUserInfo = async () => {
  const res = await kyGet('api/v1/member/info', {
    cache: 'force-cache',
    next: { tags: ['user'] },
  })
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
