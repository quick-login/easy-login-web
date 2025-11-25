'use client'

import { userAction } from './user-action'
import { clearSession, useResponse } from '@/shared/lib'
import { useUserStore } from '@/shared/store'

export const useRefreshInfo = () => {
  const setSession = useUserStore(state => state.setSession)
  const handleResponse = useResponse()
  const handleRefreshUser = async () => {
    const response = await userAction()

    if (!response.success) await clearSession()

    handleResponse(response, () => {
      setSession(response.data)
    })
  }

  return { handleRefreshUser }
}
