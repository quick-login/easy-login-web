import { useRouter } from 'next/navigation'
import { createAppAction, patchAppAction } from './social-action'
import { useAlertStore } from '@/src/shared/store/useAlertStore'
import { useConfirmStore } from '@/src/shared/store/useConfirmStore'

export const useSocialApp = () => {
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  const router = useRouter()

  const handleCrateApp = async (formData: FormData) => {
    const response = await createAppAction(formData)
    if (response.success) {
      onOpenAlert('앱이 등록되었습니다!', () => {
        router.push('/kakao/app')
      })
    } else {
      onOpenAlert(response.message)
    }
  }

  const handlePatchApp = async (formData: FormData) => {
    const response = await patchAppAction(formData)
    if (response.success) {
      onOpenAlert('앱이 수정되었습니다!', () => {
        router.push('/kakao/app')
      })
    } else {
      onOpenAlert(response.message)
    }
  }

  const handleCreate = (e: React.FormEvent<HTMLFormElement>, formdata: FormData) => {
    e.preventDefault()
    onOpenConfirm('앱을 등록하시겠습니까?', () => handleCrateApp(formdata))
  }
  const handlePatch = (e: React.FormEvent<HTMLFormElement>, formdata: FormData) => {
    e.preventDefault()
    onOpenConfirm('앱을 수정하시겠습니까?', () => handlePatchApp(formdata))
  }

  return { handleCreate, handlePatch }
}
