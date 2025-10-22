import { useRouter } from 'next/navigation'
import { questDeleteAction } from './delete-action'
import { useAlertStore } from '@/src/shared/store/useAlertStore'

export const useDetailDelete = () => {
  const router = useRouter()
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)
  const handleDeleteQuest = async (questionId: number) => {
    const response = await questDeleteAction(questionId)

    if (response.success) {
      onOpenAlert('문의가 삭제되었습니다.')
      router.push('/question?page=1')
    } else {
      onOpenAlert('삭제 도중 문제가 발생했습니다.')
    }
  }

  return { handleDeleteQuest }
}
