import ky from 'ky'
import { useState } from 'react'
import { getCookies } from '@/src/shared/lib/cookie'

export const useSocialModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleModalOpen = () => {
    setIsOpen(prev => !prev)
  }
  const handleClickSocial = async (link: string) => {
    const token = await getCookies('rc')
    if (!token) {
      handleModalOpen()
      return
    }
    //test
    const res = await ky.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/logout`)
    console.log('결과', res)
    //
    console.log('이동', link)
  }

  return { isOpen, handleModalOpen, handleClickSocial }
}
