import { useRouter } from 'next/navigation'
import { questWriteAction } from './quest-action'
import { useAlertStore } from '@/src/shared/store/useAlertStore'

export const useWriteList = () => {
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)
  const router = useRouter()

  const handleWriteQuest = async (formData: FormData) => {
    const res = await questWriteAction(formData)
    if (res.success) {
      onOpenAlert('문의가 등록되었습니다!')
      router.push('/question?page=1')
    } else {
      onOpenAlert(res.message)
    }
  }

  return { handleWriteQuest }
}
