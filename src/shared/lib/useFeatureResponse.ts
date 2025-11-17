import { useAlertStore } from '../store'
import type { ActionResponse } from '../api'

export const useFeatureResponse = () => {
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)

  return <TData>(response: ActionResponse<TData>, callbackMsg: string, callback: () => void) => {
    if (response.success) onOpenAlert(callbackMsg, callback)
    else onOpenAlert(response.message)
  }
}
