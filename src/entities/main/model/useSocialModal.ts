import { useRouter } from 'next/navigation'
import { getSession } from '@/src/shared/lib'
import { useAlertStore } from '@/src/shared/store/useAlertStore'

export const useSocialModal = () => {
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)
  const router = useRouter()

  const handleClickSocial = async (link: string) => {
    const session = await getSession()
    if (!session) {
      onOpenAlert('로그인 후 이용 가능합니다.')
      return
    } else if (link !== '/kakao') {
      onOpenAlert('추후 제공될 예정입니다.')
      return
    }
    router.push(`${link}/create`)
  }

  return { handleClickSocial }
}
