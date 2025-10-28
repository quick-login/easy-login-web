'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { MobileSideMenu } from '../side/mobile-side-menu.ui'
import { useSideStore } from '@/src/shared/store/useSideStore'
import { Text } from '@/src/shared/ui'

export const MobildHeader = ({ isLogin }: { isLogin: boolean }) => {
  // const [sideOn, setSideOn] = useState<boolean>(false)

  // const toggleSide = () => {
  //   setSideOn(prev => !prev)
  // }
  const setMobile = useSideStore(state => state.setMobile)
  return (
    <>
      <div className="bg-gray2 1060:hidden flex w-full justify-between px-[20px] py-[15px]">
        <div className={clsx('flex items-center gap-[8px]')}>
          <Image src="/easyLogin.svg" alt="easyLogin" width={24} height={24} />
          <Text className="text-[20px] font-bold">이지로그인</Text>
        </div>
        <Image
          className="cursor-pointer"
          src="/menu.svg"
          alt="menu"
          width={24}
          height={24}
          onClick={() => setMobile(true)}
        />
      </div>
      {/* <MobileSideMenu isLogin={isLogin} isOpen={sideOn} onOpen={() => setSideOn(false)} /> */}
    </>
  )
}
