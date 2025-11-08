import { useAlertStore } from '../store'
import type { ActionResponse } from '../api'

export const useResponse = () => {
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)

  return <TData>(response: ActionResponse<TData>, callback: () => void) => {
    if (response.success) callback()
    else onOpenAlert(response.message)
  }
}
