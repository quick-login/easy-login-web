import axios, { type AxiosRequestConfig } from 'axios'
import { clearSession, getSession, updateSession } from '../lib'
import type { ResponseType, UserType } from './types'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  async config => {
    const session = await getSession()
    // console.log('axios 내 세션', session?.user)
    if (session?.user?.accessToken) {
      config.headers['Authorization'] = `Bearer ${session.user.accessToken}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  async response => {
    console.log('정상요청')
    return response
  },
  async error => {
    const origin = error.config
    console.log('에러', error.response?.data)
    if (error.response?.data === '' || error.response?.data === null || error.response?.data.code === 'T6002') {
      console.log('리프레시 만료')
      await clearSession()
      return Promise.resolve(error.response)
    }
    if ((error.response?.data.code === 'T6000' || error.response?.data.code === 'T6001') && !origin._retry) {
      console.log('리프레시 재발급')
      origin._retry = true
      const session = await getSession()
      try {
        const refreshRes = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/member/refresh`,
          {},
          {
            headers: { 'Content-Type': 'application/json', 'Refresh-Token': `Bearer ${session?.user?.refreshToken}` },
            withCredentials: true,
          },
        )

        const newAccessToken = refreshRes.headers['authorization']?.replace('Bearer ', '')
        const newRefreshToken = refreshRes.headers['refresh-token']?.replace('Bearer ', '')

        console.log('새 액세스', newAccessToken)
        console.log('새 리프레시', newRefreshToken)

        await updateSession({ user: { accessToken: newAccessToken, refreshToken: newRefreshToken } })

        origin.headers.Authorization = `Bearer ${newAccessToken}`

        // return axios(origin)
        const retryResponse = await axios(origin)

        // ✅ 응답 데이터에 토큰 정보 주입
        retryResponse.data = {
          ...retryResponse.data,
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        }

        return retryResponse
      } catch (err) {
        console.log('리프레시 재발급 실패')
        await clearSession()
        return Promise.resolve(err)
      }
    }
    return Promise.resolve(error.response)
  },
)

export const axiosGet = async <Tdata>(url: string, config: AxiosRequestConfig = {}): Promise<ResponseType<Tdata>> => {
  const response = await axiosInstance.get<ResponseType<Tdata>>(url, { ...config })
  return response.data
}

export const axiosGetUserInfo = async (
  url: string,
  config: AxiosRequestConfig = {},
): Promise<ResponseType<UserType>> => {
  const response = await axiosInstance.get<ResponseType<UserType>>(url, { ...config })
  const { cash, email, maxKakaoAppCount, name, remainCount, role } = response.data.data
  console.log('결과체크', response.data)
  const session = await getSession()
  console.log('세션 결과', session)
  await updateSession({
    user: {
      cash: cash,
      name: name,
      email: email,
      maxKakaoAppCount: maxKakaoAppCount,
      remainCount: remainCount,
      role: role,
      updateAt: new Date().toISOString(),
      accessToken: response.data.accessToken ? response.data.accessToken : session?.user?.accessToken,
      refreshToken: response.data.refreshToken ? response.data.refreshToken : session?.user?.refreshToken,
    },
  })
  return response.data
}

export const axiosPostLogin = async <Tdata>(
  url: string,
  params: object | string = {},
  config: AxiosRequestConfig = {},
): Promise<ResponseType<Tdata>> => {
  const response = await axiosInstance.post(url, params, { ...config })
  const result: ResponseType<Tdata> = await response.data

  const ac = response.headers['authorization']?.replace('Bearer ', '')
  const rc = response.headers['refresh-token']?.replace('Bearer ', '')

  const data = { ...result.data, accessToken: ac, refreshToken: rc }

  return { ...result, data }
}

export const axiosPost = async <Tdata>(
  url: string,
  params: object | string = {},
  config: AxiosRequestConfig = {},
): Promise<ResponseType<Tdata>> => {
  const response = await axiosInstance.post(url, params, { ...config })
  const data: ResponseType<Tdata> = await response.data

  return data
}

export const axiosPatch = async <Tdata>(
  url: string,
  params: object | string = {},
  config: AxiosRequestConfig = {},
): Promise<ResponseType<Tdata>> => {
  const response = await axiosInstance.patch(url, params, { ...config })
  const data: ResponseType<Tdata> = await response.data

  return data
}

export const axiosDelete = async <Tdata>(
  url: string,
  config: AxiosRequestConfig = {},
): Promise<ResponseType<Tdata>> => {
  const response = await axiosInstance.delete(url, { ...config })
  const data: ResponseType<Tdata> = await response.data

  return data
}
