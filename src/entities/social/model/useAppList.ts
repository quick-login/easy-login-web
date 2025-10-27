import { useEffect, useState } from 'react'
import { appListAction } from './social-action'
import type { SocialApp } from './type'

export const useAppList = () => {
  const [appList, setAppList] = useState<SocialApp[]>([])

  const handleGetMyAppList = async () => {
    const response = await appListAction()

    if (response.success) {
      setAppList(response.data)
    } else {
      console.log('데이터 오류')
    }
  }

  useEffect(() => {
    handleGetMyAppList()
  }, [])

  return { appList }
}
