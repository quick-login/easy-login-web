import axios, { type AxiosRequestConfig } from 'axios'
import { signOut } from '@/auth'
import { clearSession, getSession, signOutWidthForm, updateSession } from '@/src/entities/user/model/user-auth'

export const axiosInstance = axios.create({
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
    console.log('axios 내 세션', session)
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
      origin._retry = true
      const session = await getSession()
      console.log('기존 리프레시', session?.user?.refreshToken)
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

        origin.headers['Authorization'] = `Bearer ${newAccessToken}`
        // axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
        return axiosInstance(origin)
      } catch (err) {
        console.log('리프레시 발급 실패')
        await clearSession()
        return Promise.resolve(err)
      }
    }
    return Promise.resolve(error.response)
  },
)

export interface Page {
  currentPage: number
  pageSize: number
  totalElements: number
  totalPages: number
}

export interface ResponseType<Tdata = unknown> {
  code: string
  message: string
  data: Tdata
  pagination?: Page
}

export const axiosGet = async <Tdata>(url: string, config: AxiosRequestConfig = {}): Promise<ResponseType<Tdata>> => {
  const response = await axiosInstance.get<ResponseType<Tdata>>(url, { ...config })
  console.log('으응답', response)
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
