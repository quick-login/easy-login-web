import axios, { type AxiosRequestConfig } from 'axios'
import { deleteCookies, getCookies, setCookies } from '../lib/cookie'

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
    console.log('정상요청')
    return response
  },
  async error => {
    const origin = error.config
    console.log('에러', error.response?.data)
    console.log('에러코드', error.response?.status)
    // console.log('에러코드', error.response)
    if (error.response?.data === '' || error.response?.data === null) {
      console.log('지우기', await getCookies('ac'))
      await deleteCookies('ac')
      await deleteCookies('rc')
      console.log('지우기2', await getCookies('ac'))
      return Promise.resolve(error.response)
    }
    if ((error.response?.data.code === 'T6000' || error.response?.data.code === 'T6001') && !origin._retry) {
      origin._retry = true

      const refreshToken = await getCookies('rc')
      console.log('기존 리프레시', refreshToken?.value)

      try {
        const refreshRes = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/member/refresh`,
          {},
          {
            headers: { 'Content-Type': 'application/json', 'Refresh-Token': `Bearer ${refreshToken?.value}` },
            withCredentials: true,
          },
        )
        console.log('리프레시 결과', refreshRes, refreshRes.status)
        console.log('리프레시 결과 서버', await refreshRes.data)

        const result = await refreshRes.data

        const newAccessToken = refreshRes.headers['authorization']?.replace('Bearer ', '')
        const newRefreshToken = refreshRes.headers['refresh-token']?.replace('Bearer ', '')

        console.log('새 액세스', newAccessToken)
        console.log('새 리프레시', newRefreshToken)

        await setCookies('ac', newAccessToken)
        await setCookies('rc', newRefreshToken)
        origin.headers['Authorization'] = `Bearer ${newAccessToken}`
        return axiosInstance(origin)
      } catch (err) {
        await deleteCookies('ac')
        await deleteCookies('rc')
      }
    }
    return Promise.resolve(error.response)
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

  console.log('post', data)

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
