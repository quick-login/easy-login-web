import { useEffect, useState } from 'react'
import { appInfoAction } from './social-action'
import type { SocialAppInfo } from './type'

export const useAppInfo = (appId: number) => {
  const [app, setApp] = useState<SocialAppInfo>({
    appId: appId,
    appName: '',
    redirectUrl: '',
    restKey: '',
  })

  const handleGetApp = async (appId: number) => {
    const response = await appInfoAction(appId)
    if (response.success) {
      setApp(response.data)
    } else {
      console.log('데이터 오류')
    }
  }

  useEffect(() => {
    handleGetApp(appId)
  }, [])

  return { app }
}
