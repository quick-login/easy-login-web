import { axiosGet } from '@/shared/api'
import type { SocialApp, SocialAppInfo } from '../model/type'

export const getMyAppList = async () => {
  const response = await axiosGet<SocialApp[]>(`/api/v1/kakao/app/list`)
  return response
}

export const getAppInfo = async (appId: number) => {
  const response = await axiosGet<SocialAppInfo>(`/api/v1/kakao/app/${appId}`)
  return response
}
