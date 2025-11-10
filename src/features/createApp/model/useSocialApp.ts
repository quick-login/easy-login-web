import { useRouter } from 'next/navigation'
import { createAppAction, patchAppAction } from './social-action'
import { useFeatureResponse, useResponse } from '@/shared/lib'
import { useAlertStore, useConfirmStore } from '@/shared/store'

export const useSocialApp = () => {
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  const router = useRouter()
  const handleResponse = useFeatureResponse()
  const handleResponse2 = useResponse()

  const handleCrateApp = async (formData: FormData) => {
    const response = await createAppAction(formData)
    // handleResponse(response, '앱이 등록되었습니다.', () => router.push('/kakao/app'))
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

    //아래 오류 수정해야함 왜 안됨
    // handleResponse(response, '앱이 수정되었습니다.', () => router.push('/kakao/app'))
    // handleResponse2(response, () => router.push('/kakao/app'))
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
