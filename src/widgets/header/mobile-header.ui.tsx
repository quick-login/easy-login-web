'use client'
import Image from 'next/image'
import { useSideStore } from '@/shared/store'
import { LinkText } from '@/shared/ui'

export const MobildHeader = () => {
  const setMobile = useSideStore(state => state.setMobile)

  return (
    <header className="bg-gray2 1060:hidden fixed top-0 z-[999] flex w-full justify-between px-[20px] py-[15px]">
      <LinkText href={'/'} className="flex cursor-pointer items-center gap-[8px]">
        <Image src="/easyLogin.svg" alt="easyLogin" width={24} height={24} />
        <h1 className="font-pretendard text-[20px] font-bold">이지로그인</h1>
      </LinkText>
      <Image
        className="cursor-pointer"
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}
        onClick={() => setMobile(true)}
      />
    </header>
  )
}
