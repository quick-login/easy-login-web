import { useRouter } from 'next/navigation'
import { questWriteAction } from './quest-action'
import { useAlertStore } from '@/src/shared/store/useAlertStore'
import { useConfirmStore } from '@/src/shared/store/useConfirmStore'

export const useWriteList = () => {
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  const router = useRouter()

  const handleWriteQuest = async (formData: FormData) => {
    const res = await questWriteAction(formData)
    if (res.success) {
      onOpenAlert('문의가 등록되었습니다!', () => {
        router.push('/question?page=1')
      })
    } else {
      onOpenAlert(res.message)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, formdata: FormData) => {
    e.preventDefault()
    onOpenConfirm('등록하시겠습니까?', () => handleWriteQuest(formdata))
  }

  return { handleSubmit }
}
