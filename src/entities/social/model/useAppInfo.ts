import { useEffect, useState } from 'react'
import { appInfoAction } from './social-action'
import { useAlertStore } from '@/shared/store'
import type { SocialAppInfo } from './type'

export const useAppInfo = (appId: number) => {
  const [app, setApp] = useState<SocialAppInfo>({
    appId: appId,
    appName: '',
    redirectUrl: '',
    restKey: '',
  })
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)

  const handleGetApp = async (appId: number) => {
    const response = await appInfoAction(appId)
    if (response.success) {
      setApp(response.data)
    } else {
      onOpenAlert('데이터 오류')
    }
  }

  useEffect(() => {
    handleGetApp(appId)
  }, [])

  return { app }
}
