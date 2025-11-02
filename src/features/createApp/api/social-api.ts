import type { SocialAppInfo } from '@/src/entities/social'
import { axiosPatch, axiosPost } from '@/src/shared/api'

export const postCrateApp = async (appInfo: SocialAppInfo) => {
  const response = await axiosPost<null>(`/api/v1/kakao/app`, appInfo)
  return response
}

export const patchSocialApp = async (appInfo: SocialAppInfo) => {
  const response = await axiosPatch<SocialAppInfo>(`/api/v1/kakao/app/${appInfo.appId}`, {
    appName: appInfo.appName,
    restKey: appInfo.restKey,
    redirectUrl: appInfo.redirectUrl,
  })
  return response
}
