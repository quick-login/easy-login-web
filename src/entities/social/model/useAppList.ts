import { useEffect, useState } from 'react'
import { appListAction } from './social-action'
import { useResponse } from '@/shared/lib'
import type { SocialApp } from './type'

export const useAppList = () => {
  const [appList, setAppList] = useState<SocialApp[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handleResponse = useResponse()

  const handleGetMyAppList = async () => {
    setIsLoading(true)
    const response = await appListAction()

    handleResponse(response, () => {
      setAppList(response.data)
    })
    setIsLoading(false)
  }

  useEffect(() => {
    handleGetMyAppList()
  }, [])

  return { appList, isLoading }
}
