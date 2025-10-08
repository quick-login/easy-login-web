import axios, { type AxiosRequestConfig } from 'axios'
import { getCookie } from 'cookies-next'
import { getCookies, setCookies } from '../lib/cookie'

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
    const token = await getCookies('ac')
    if (token?.value) {
      config.headers['Authorization'] = `Bearer ${token.value}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  async response => {
    console.log('정상?')
    return response
  },
  async error => {
    const origin = error.config
    console.log('에러', error.response?.data)
    if ((error.response?.data.code === 'T6000' || error.response?.data.code === 'T6001') && !origin._retry) {
      origin._retry = true

      const refreshToken = await getCookies('rc')
      console.log('기존 리프레시', refreshToken?.value)

      const refreshRes = await axiosInstance.post(
        '/api/v1/member/refresh',
        {},
        {
          headers: { 'Refresh-Token': refreshToken?.value },
        },
      )

      const newAccessToken = refreshRes.headers['authorization']?.replace('Bearer ', '')
      const newRefreshToken = refreshRes.headers['refresh-token']?.replace('Bearer ', '')

      console.log('새 액세스', newAccessToken)
      console.log('새 리프레시', newRefreshToken)

      await setCookies('ac', newAccessToken)
      await setCookies('rc', newRefreshToken)
      origin.headers['Authorization'] = `Bearer ${newAccessToken}`
      return axiosInstance(origin)
    }
    return Promise.reject(error)
  },
)

export interface ResponseType<Tdata = unknown> {
  code: string
  message: string
  data: Tdata
}

export const axiosGet = async <Tdata>(url: string, config: AxiosRequestConfig = {}): Promise<ResponseType<Tdata>> => {
  const response = await axiosInstance.get<ResponseType<Tdata>>(url, { ...config })
  return response.data
}

export const axiosPost = async <Tdata>(
  url: string,
  params: object | string = {},
  config: AxiosRequestConfig = {},
): Promise<ResponseType<Tdata>> => {
  const response = await axiosInstance.post(url, params, { ...config })
  const data: ResponseType<Tdata> = await response.data

  const ac = response.headers['authorization']?.replace('Bearer ', '')
  const rc = response.headers['refresh-token']?.replace('Bearer ', '')

  if (ac !== undefined) await setCookies('ac', ac)
  if (rc !== undefined) await setCookies('rc', rc)

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
