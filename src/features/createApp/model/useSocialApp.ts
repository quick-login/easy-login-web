import { useRouter } from 'next/navigation'
import { createAppAction, patchAppAction } from './social-action'
import { useFeatureResponse } from '@/shared/lib'
import { useConfirmStore } from '@/shared/store'

export const useSocialApp = () => {
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  const router = useRouter()
  const handleResponse = useFeatureResponse()

  const handleCrateApp = async (formData: FormData) => {
    const response = await createAppAction(formData)
    handleResponse(response, '앱이 등록되었습니다.', () => router.push('/kakao/app'))
  }

  const handlePatchApp = async (formData: FormData) => {
    const response = await patchAppAction(formData)
    handleResponse(response, '앱이 수정되었습니다.', () => router.push('/kakao/app'))
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
