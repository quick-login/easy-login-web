import { useAlertStore } from '../store'
import { updateSession } from './user-auth'
import type { ActionResponse } from '../api'

export const useResponse = () => {
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)
  // const updateToken = async (accessToken: string, refreshToken: string) => {
  //   console.log('액세스', accessToken, '리프레시', refreshToken)
  //   await updateSession({ user: { accessToken: accessToken, refreshToken: refreshToken } })
  // }

  return <TData>(response: ActionResponse<TData>, callback: () => void) => {
    // if (response.accessToken !== undefined && response.refreshToken !== undefined) {
    //   updateToken(response.accessToken, response.refreshToken)
    // }
    if (response.success) callback()
    else onOpenAlert(response.message)
  }
}
