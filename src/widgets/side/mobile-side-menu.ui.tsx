'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { SideBasic, SideFooter } from '@/src/entities/sideMenu'
import { CashMenu, UserMenu } from '@/src/features/activeSide/ui'
import { Text } from '@/src/shared/ui'

type MobileSideProps = {
  isOpen: boolean
  onOpen: () => void
}

export const MobileSideMenu = ({ isOpen, onOpen }: MobileSideProps) => {
  const [sideOn, setSideOn] = useState<boolean>(true)
  return (
    <section className={clsx('fixed inset-0 flex h-full w-full flex-col', 'pointer-events-none')} aria-hidden={!isOpen}>
      <div
        className={clsx(
          'fixed top-0 left-0 z-10 h-full w-[55%] transform bg-white transition-transform duration-500 ease-[cubic-bezier(.645,.045,.355,1)]',
          isOpen ? 'pointer-events-auto translate-x-0' : 'pointer-events-none -translate-x-full',
        )}
        style={{ willChange: 'transform' }}
      />
      <div
        className={clsx(
          'fixed top-0 right-0 z-10 h-full w-[55%] transform bg-white transition-transform duration-500 ease-[cubic-bezier(.645,.045,.355,1)]',
          isOpen ? 'pointer-events-auto translate-x-0' : 'pointer-events-none translate-x-full',
        )}
        style={{ willChange: 'transform' }}
      />
      <Image
        src="/easyLogin.svg"
        alt="easyLogin"
        width={250}
        height={250}
        className={clsx(
          'fixed top-1/2 left-1/2 z-15 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-100 md:w-[400px]',
          isOpen ? 'pointer-events-auto opacity-5 delay-400' : 'pointer-events-none opacity-0',
        )}
      />

      <div
        className={clsx(
          'relative z-20 flex h-full flex-col gap-[10px] p-[30px] transition-opacity duration-100',
          isOpen ? 'pointer-events-auto opacity-100 delay-400' : 'pointer-events-none opacity-0',
        )}
      >
        {/* 메뉴 헤더 */}
        <div className={clsx('z-25 flex items-center justify-between')}>
          <div className="flex items-center gap-2">
            <Image src="/easyLogin.svg" alt="easyLogin" width={24} height={24} />
            <Text className="text-[20px] font-bold">이지로그인</Text>
          </div>
          <Image src="/close.svg" alt="close" width={20} height={20} className="cursor-pointer" onClick={onOpen} />
        </div>
        {/* 메뉴 본문 */}
        <div className="flex flex-1 flex-col overflow-auto">
          <CashMenu sideOn={sideOn} />
          <hr className="border-gray2" />
          <div className="flex flex-1 flex-col gap-[30px] p-[20px]">
            <SideBasic sideOn={sideOn} />
            <UserMenu sideOn={sideOn} />
          </div>
          <hr className="border-gray2" />
          <SideFooter sideOn={sideOn} />
        </div>
      </div>
    </section>
  )
}
