import { useEffect, useState } from 'react'
import { appListAction } from './social-action'
import { useAlertStore } from '@/shared/store'
import type { SocialApp } from './type'

export const useAppList = () => {
  const [appList, setAppList] = useState<SocialApp[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)

  const handleGetMyAppList = async () => {
    setIsLoading(true)
    const response = await appListAction()

    if (response.success) {
      setAppList(response.data)
    } else {
      onOpenAlert('데이터 오류')
    }
    setIsLoading(false)
  }

  useEffect(() => {
    handleGetMyAppList()
  }, [])

  return { appList, isLoading }
}
