'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { SideContent } from './side-content.ui'
import { SideHeader } from '../../entities/sideMenu'

export const SideMenu = ({ isLogin }: { isLogin: boolean }) => {
  console.log('일반 사이드 렌더링')
  const [sideOn, setSideOn] = useState<boolean>(true)

  const handleToggleSide = () => {
    setSideOn(prev => !prev)
  }

  return (
    <aside
      className={clsx(
        'max-1060:hidden flex h-full flex-col rounded-[20px] bg-white transition-[width] duration-300',
        sideOn ? 'w-[280px]' : 'w-[64px]',
      )}
    >
      <SideHeader sideOn={sideOn} onToggleSide={handleToggleSide} />
      <hr className="border-gray2" />
      <SideContent isLogin={isLogin} sideOn={sideOn} />
    </aside>
  )
}
