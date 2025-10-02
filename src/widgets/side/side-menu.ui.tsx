'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { SideBasic, SideFooter, SideHeader } from '../../entities/sideMenu'
import { CashMenu, UserMenu } from '../../features/activeSide/ui'

export const SideMenu = () => {
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
      <CashMenu sideOn={sideOn} />
      <hr className="border-gray2" />
      <div className="flex flex-1 flex-col gap-[30px] p-[20px]">
        <SideBasic sideOn={sideOn} />
        <UserMenu sideOn={sideOn} />
      </div>
      <hr className="border-gray2" />
      <SideFooter sideOn={sideOn} />
    </aside>
  )
}
