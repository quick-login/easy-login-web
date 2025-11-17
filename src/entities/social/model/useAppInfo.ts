import { useEffect, useState } from 'react'
import { appInfoAction } from './social-action'
import { useResponse } from '@/shared/lib'
import type { SocialAppInfo } from './type'

export const useAppInfo = (appId: number) => {
  const [app, setApp] = useState<SocialAppInfo>({
    appId: appId,
    appName: '',
    redirectUrl: '',
    restKey: '',
  })
  const handleResponse = useResponse()

  const handleGetApp = async (appId: number) => {
    const response = await appInfoAction(appId)
    handleResponse(response, () => {
      setApp(response.data)
    })
  }

  useEffect(() => {
    handleGetApp(appId)
  }, [])

  return { app }
}
