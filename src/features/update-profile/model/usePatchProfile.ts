import { profilePatchAction } from './profile-action'
import { useAlertStore, useConfirmStore } from '@/shared/store'

export const usePatchProfile = () => {
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)

  const handlePatchProfile = async (formData: FormData) => {
    const res = await profilePatchAction(formData)
    if (res.success) {
      onOpenAlert('정보가 수정되었습니다!', () => {
        window.location.reload()
      })
    } else {
      onOpenAlert(res.message)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, formdata: FormData) => {
    e.preventDefault()
    onOpenConfirm('정보를 수정하시겠습니까?', () => handlePatchProfile(formdata))
  }

  return { handleSubmit }
}
