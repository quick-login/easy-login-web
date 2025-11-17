import { adminAnswerAction } from './quest-action'
import { useFeatureResponse } from '@/shared/lib'
import { useConfirmStore } from '@/shared/store'

export const useAdminAnswer = (questionId: number) => {
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  const handleResponse = useFeatureResponse()

  const handleWriteQuest = async (formData: FormData) => {
    const response = await adminAnswerAction(questionId, formData)
    handleResponse(response, '답변이 등록되었습니다.', () => window.location.reload())
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, formdata: FormData) => {
    e.preventDefault()
    onOpenConfirm('답변하시겠습니까?', () => handleWriteQuest(formdata))
  }

  return { handleSubmit }
}
