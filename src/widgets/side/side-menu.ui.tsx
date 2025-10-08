'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { SideContent } from './side-content.ui'
import { SideBasic, SideFooter, SideHeader } from '../../entities/sideMenu'
import { CashMenu, UserMenu } from '../../features/activeSide/ui'
import { userAction } from '@/src/entities/user/model/user-action'
import type { UserType } from '@/src/entities/user/type'

export const SideMenu = ({ isLogin }: { isLogin: boolean }) => {
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
      {/* {isLogin && (
        <>
          <CashMenu sideOn={sideOn} cash={user?.cash ?? 0} />
          <hr className="border-gray2" />
        </>
      )}

      <div className="flex flex-1 flex-col gap-[30px] p-[20px]">
        <SideBasic sideOn={sideOn} />
        {isLogin && <UserMenu sideOn={sideOn} />}
      </div>
      <hr className="border-gray2" />
      <SideFooter sideOn={sideOn} isLogin={isLogin} name={user?.name ?? undefined} /> */}
    </aside>
  )
}
