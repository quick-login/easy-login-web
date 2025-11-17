import { useRouter } from 'next/navigation'
import { questWriteAction } from './quest-action'
import { useFeatureResponse } from '@/shared/lib'
import { useConfirmStore } from '@/shared/store'

export const useWriteList = () => {
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  const handleResponse = useFeatureResponse()
  const router = useRouter()

  const handleWriteQuest = async (formData: FormData) => {
    const response = await questWriteAction(formData)
    handleResponse(response, '문의가 등록되었습니다.', () => router.push('/question?page=1'))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, formdata: FormData) => {
    e.preventDefault()
    onOpenConfirm('등록하시겠습니까?', () => handleWriteQuest(formdata))
  }

  return { handleSubmit }
}
