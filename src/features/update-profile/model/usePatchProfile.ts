import { profilePatchAction } from './profile-action'
import { useFeatureResponse } from '@/shared/lib'
import { useConfirmStore, useUserStore } from '@/shared/store'

export const usePatchProfile = () => {
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  const updateSession = useUserStore(state => state.updateSession)
  const handleResponse = useFeatureResponse()

  const handlePatchProfile = async (form: HTMLFormElement, formData: FormData) => {
    const response = await profilePatchAction(formData)
    handleResponse(response, '정보가 수정되었습니다.', () => {
      updateSession('name', String(formData.get('name') ?? ''))
      form.reset()
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, formdata: FormData) => {
    e.preventDefault()
    const form = e.currentTarget
    onOpenConfirm('정보를 수정하시겠습니까?', () => handlePatchProfile(form, formdata))
  }

  return { handleSubmit }
}
