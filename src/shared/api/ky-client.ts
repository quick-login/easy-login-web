import ky from 'ky'
import { getCookies } from '../lib/cookie'
import type { Options } from 'ky'

let apiInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  throwHttpErrors: false,
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    // beforeRequest: [
    //   request => {
    //     const token = getCookies('ac')
    //     if (token) {
    //       request.headers.set('Authorization', `Bearer ${token}`)
    //     }
    //   },
    // ],
    afterResponse: [
      async (request, options, response) => {
        const data = await response.clone().json()
        console.log('afterResponse', data)
        if (response.status === 401) {
          window.location.href = '/login'
        }
        return response
      },
    ],
  },
})

export const setHeader = (ac: string) => {
  apiInstance = apiInstance.extend({ headers: { Authorization: `Bearer ${ac}` } })
}

export const removeHeader = () => {
  apiInstance = apiInstance.extend({ headers: {} })
}

type HttpMethod = 'post' | 'patch' | 'delete'
type ResponseType = {
  code: string
  message: string
  data: object | string | null
}

export const kyGet = async (url: string, config: Options = {}) => {
  const data = await apiInstance.get(url, config).json()
  return data
}

export const kyRequest = async (
  method: HttpMethod,
  url: string,
  params: object | string = {},
  config: Options = {},
) => {
  const data: ResponseType = await apiInstance[method](url, { ...config, json: params }).json()
  return data
}
