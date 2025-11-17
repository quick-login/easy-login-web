import { useRouter } from 'next/navigation'
import { noticeDeleteAction, questDeleteAction } from './delete-action'
import { useFeatureResponse } from '@/shared/lib'

export const useDetailDelete = () => {
  const router = useRouter()
  const handleResponse = useFeatureResponse()

  const handleDeleteQuest = async (questionId: number) => {
    const response = await questDeleteAction(questionId)
    handleResponse(response, '문의가 삭제되었습니다.', () => router.push('/question?page=1'))
  }

  const handleDeleteNotice = async (noticeId: number) => {
    const response = await noticeDeleteAction(noticeId)
    handleResponse(response, '공지가 삭제되었습니다.', () => router.push('/notice?page=1'))
  }

  return { handleDeleteQuest, handleDeleteNotice }
}
