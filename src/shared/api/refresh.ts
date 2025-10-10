// import axios from 'axios'
// import { setCookie } from 'cookies-next'

// export const refreshPost = async (token: string) => {
//   console.log('리프레시 준비', token)
//   const reponse = await axios.post(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/member/refresh`,
//     {},
//     { headers: { 'Refresh-Token': token } },
//   )

//   const newAccessToken = reponse.headers['authorization']?.replace('Bearer ', '')
//   const newRefreshToken = reponse.headers['refresh-token']?.replace('Bearer ', '')

//   setCookie('actest', newAccessToken, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//   })
//   setCookie('rctest', newRefreshToken, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//   })

//   return { newAccessToken, newRefreshToken }
// }
