import { useRouter } from 'next/navigation'
import { noticeWriteAction } from './notice-action'
import { useAlertStore } from '@/src/shared/store/useAlertStore'

export const useWirteList = () => {
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)
  const router = useRouter()

  const handleWriteNotice = async (formData: FormData) => {
    const res = await noticeWriteAction(formData)
    if (res.success) {
      onOpenAlert('공지가 등록되었습니다!')
      router.push('/notice?page=1')
    } else {
      onOpenAlert(res.message)
    }
  }

  return { handleWriteNotice }
}
