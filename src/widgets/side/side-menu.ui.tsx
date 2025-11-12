'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useSide } from './model/useSide'
import { SideContent } from './side-content.ui'
import { SideHeader } from '@/entities/sideMenu'

export const SideMenu = () => {
  const { mobile, setMobile, side, toggleSide } = useSide()
  console.log('사이드 렌더링')

  return (
    <aside
      className={clsx(
        '1060:static 1060:rounded-[20px] 1060:transition-[width] 1060:duration-300 1060:bg-white fixed z-[1000] flex h-full w-full flex-col rounded-none',
        side ? '1060:w-[280px]' : '1060:w-[64px]',
        '1060:pointer-events-auto pointer-events-none',
      )}
      aria-hidden={!side}
    >
      <div
        className={clsx(
          '1060:hidden fixed top-0 left-0 z-10 h-full w-[55%] transform bg-white transition-transform duration-500 ease-[cubic-bezier(.645,.045,.355,1)]',
          mobile! ? 'pointer-events-auto translate-x-0' : 'pointer-events-none -translate-x-full',
        )}
        style={{ willChange: 'transform' }}
      />
      <div
        className={clsx(
          '1060:hidden fixed top-0 right-0 z-10 h-full w-[55%] transform bg-white transition-transform duration-500 ease-[cubic-bezier(.645,.045,.355,1)]',
          mobile! ? 'pointer-events-auto translate-x-0' : 'pointer-events-none translate-x-full',
        )}
        style={{ willChange: 'transform' }}
      />
      <Image
        src="/easyLogin.svg"
        alt="easyLogin"
        width={250}
        height={250}
        className={clsx(
          '1060:hidden fixed top-1/2 left-1/2 z-15 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-100 md:w-[400px]',
          mobile ? 'pointer-events-auto opacity-5 delay-400' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        className={clsx(
          '1060:p-[0px] 1060:transition-none 1060:opacity-100 1060:pointer-events-auto relative z-20 flex h-full flex-col p-[20px] transition-opacity duration-100',
          mobile ? 'pointer-events-auto opacity-100 delay-400' : 'pointer-events-none opacity-0',
        )}
      >
        <SideHeader mobile={mobile} sideOn={side} onToggleSide={toggleSide} setMobile={setMobile} />
        <hr className="border-gray2" />
        <SideContent sideOn={side} mobile={mobile} />
      </div>
    </aside>
  )
}
