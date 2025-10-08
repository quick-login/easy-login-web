import ky from 'ky'
import { redirect } from 'next/navigation'
import { getCookies, setCookies } from '../lib/cookie'
import type { Options } from 'ky'

const apiInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  retry: 1,
  throwHttpErrors: false,
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    beforeRequest: [
      async request => {
        const token = await getCookies('ac')
        if (token?.value) {
          request.headers.set('Authorization', `Bearer ${token?.value}`)
        }
      },
    ],
    // afterResponse: [
    //   async (request, options, response) => {
    //     let data = null
    //     try {
    //       data = await response.clone().json()
    //     } catch (err) {
    //       console.log('결과', err)
    //       return response
    //     }

    //     console.log('afterResponse', data)
    //     if (data.code === 'T6001') {
    //       console.log('토큰 만료')
    //       const refresh = await ky.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/refresh`)
    //       if (!refresh.ok) {
    //         console.log('안된 결과', await refresh.json())
    //         redirect('/login')
    //       }
    //       console.log(refresh)
    //     }

    //     return response
    //   },
    // ],
  },
})

type HttpMethod = 'post' | 'patch' | 'delete'
export type ResponseType = {
  code: string
  message: string
  data: object | string | null
}

export const kyGet = async (url: string, config: Options = {}) => {
  const data: ResponseType = await apiInstance.get(url, config).json()
  return data
}

export const kyRequest = async (
  method: HttpMethod,
  url: string,
  params: object | string = {},
  config: Options = {},
) => {
  const response = await apiInstance[method](url, { ...config, json: params })
  const data: ResponseType = await response.json()

  const ac = response.headers.get('Authorization')?.replace('Bearer ', '')
  const rc = response.headers.get('Refresh-Token')?.replace('Bearer ', '')

  if (ac !== undefined) await setCookies('ac', ac)
  if (rc !== undefined) await setCookies('rc', rc)

  return data
}
