import { profilePatchAction } from './profile-action'
import { useFeatureResponse } from '@/shared/lib'
import { useConfirmStore } from '@/shared/store'

export const usePatchProfile = () => {
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  const handleResponse = useFeatureResponse()

  const handlePatchProfile = async (formData: FormData) => {
    const response = await profilePatchAction(formData)
    handleResponse(response, '정보가 수정되었습니다.', () => window.location.reload())
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, formdata: FormData) => {
    e.preventDefault()
    onOpenConfirm('정보를 수정하시겠습니까?', () => handlePatchProfile(formdata))
  }

  return { handleSubmit }
}
