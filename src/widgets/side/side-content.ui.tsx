'use client'

import { redirect } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { SideBasic, SideCash, SideFooter, SideItem } from '@/src/entities/sideMenu'
import { userAction } from '@/src/entities/user/model/user-action'
import type { UserType } from '@/src/entities/user/type'

type SideContentProps = {
  isLogin: boolean
  sideOn: boolean
}

export const SideContent = ({ isLogin, sideOn }: SideContentProps) => {
  const [user, setUser] = useState<UserType>({
    name: '',
    cash: 0,
    email: '',
    maxKakaoAppCount: 0,
    remainCount: 0,
    role: 'USER',
  })
  const handleGetUserInfo = useCallback(async () => {
    const response = await userAction()

    if (response.success) {
      setUser(response.data)
    } else {
      redirect('/login')
    }
  }, [isLogin])

  useEffect(() => {
    if (isLogin) {
      handleGetUserInfo()
    }
  }, [isLogin])
  return (
    <>
      {isLogin && (
        <>
          <SideCash cash={user?.cash ?? 0} sideOn={sideOn} />
          <hr className="border-gray2" />
        </>
      )}

      <div className="scrollbar-hidden flex flex-1 flex-col gap-[15px] overflow-auto p-[20px]">
        <SideBasic sideOn={sideOn} />
        {isLogin && <SideItem sideOn={sideOn} />}
      </div>
      <hr className="border-gray2" />
      <SideFooter sideOn={sideOn} isLogin={isLogin} name={user?.name ?? undefined} />
    </>
  )
}
