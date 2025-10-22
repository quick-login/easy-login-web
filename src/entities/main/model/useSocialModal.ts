import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { getCookies } from '@/src/shared/lib/cookie'

type TextType = '로그인 후 이용가능합니다.' | '추후 제공될 예정입니다.'

export const useSocialModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [text, setText] = useState<TextType>('로그인 후 이용가능합니다.')
  const router = useRouter()

  const handleModalOpen = () => {
    setIsOpen(prev => !prev)
  }
  const handleClickSocial = async (link: string) => {
    const token = await getCookies('rc')
    if (!token) {
      handleModalOpen()
      setText('로그인 후 이용가능합니다.')
      return
    } else if (link !== '/kakao') {
      handleModalOpen()
      setText('추후 제공될 예정입니다.')
      return
    }
    router.push(`${link}/create`)
  }

  return { isOpen, text, handleModalOpen, handleClickSocial }
}
