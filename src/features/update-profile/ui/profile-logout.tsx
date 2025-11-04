import Image from 'next/image'
import { useLogout } from '../model/useLogout'
import { useConfirmStore } from '@/shared/store'
import { A, Text } from '@/shared/ui'

export const ProfileLogout = () => {
  const { handleLogout } = useLogout()
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  return (
    <A
      className="text-negative flex items-center justify-center gap-[4px] text-[14px]"
      onClick={() => onOpenConfirm('로그아웃 하시겠습니까?', handleLogout)}
    >
      <Image src="/trash.svg" alt="logout" width={20} height={20} />
      <Text className="text-negative">로그아웃</Text>
    </A>
  )
}
