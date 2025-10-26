import axios, { type AxiosRequestConfig } from 'axios'
import { deleteCookies, getCookies, setCookies } from '../lib/cookie'
import { getSession, signOutWidthForm, updateSession } from '@/src/entities/user/model/user-auth'

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
    if (session?.accessToken) {
      config.headers['Authorization'] = `Bearer ${session?.accessToken}`
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
    if (error.response?.data === '' || error.response?.data === null) {
      // await deleteCookies('ac')
      // await deleteCookies('rc')
      await signOutWidthForm()
      return Promise.resolve(error.response)
    }
    if ((error.response?.data.code === 'T6000' || error.response?.data.code === 'T6001') && !origin._retry) {
      origin._retry = true

      // const refreshToken = await getCookies('rc')
      const session = await getSession()
      // const refreshToken = await getCookies('rc')
      console.log('기존 리프레시', session?.refreshToken)

      try {
        const refreshRes = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/member/refresh`,
          {},
          {
            headers: { 'Content-Type': 'application/json', 'Refresh-Token': `Bearer ${session?.refreshToken}` },
            withCredentials: true,
          },
        )

        const result = await refreshRes.data

        const newAccessToken = refreshRes.headers['authorization']?.replace('Bearer ', '')
        const newRefreshToken = refreshRes.headers['refresh-token']?.replace('Bearer ', '')

        console.log('새 액세스', newAccessToken)
        console.log('새 리프레시', newRefreshToken)

        await updateSession({ user: { accessToken: newAccessToken, refreshToken: newRefreshToken } })

        // await setCookies('ac', newAccessToken)
        // await setCookies('rc', newRefreshToken)
        origin.headers['Authorization'] = `Bearer ${newAccessToken}`
        return axiosInstance(origin)
      } catch (err) {
        // await deleteCookies('ac')
        // await deleteCookies('rc')
        await signOutWidthForm()
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
