'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { SideBasic, SideFooter, SideHeader } from '../../entities/sideMenu'
import { CashMenu, UserMenu } from '../../features/activeSide/ui'
import { getUserInfo } from '@/src/entities/user/api/user-api'
import type { UserType } from '@/src/entities/user/type'

export const SideMenu = ({ isLogin, user = null }: { isLogin: boolean; user?: UserType | null }) => {
  const [sideOn, setSideOn] = useState<boolean>(true)

  const handleToggleSide = () => {
    setSideOn(prev => !prev)
  }

  useEffect(() => {
    const test = async () => await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/user`, { method: 'GET' })
    // test()
    // const test = async () => {
    //   await getUserInfo()
    // }
    test()
  }, [])

  return (
    <aside
      className={clsx(
        'max-1060:hidden flex h-full flex-col rounded-[20px] bg-white transition-[width] duration-300',
        sideOn ? 'w-[280px]' : 'w-[64px]',
      )}
    >
      <SideHeader sideOn={sideOn} onToggleSide={handleToggleSide} />
      <hr className="border-gray2" />
      {isLogin && (
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
      <SideFooter sideOn={sideOn} isLogin={isLogin} name={user?.name ?? undefined} />
    </aside>
  )
}
