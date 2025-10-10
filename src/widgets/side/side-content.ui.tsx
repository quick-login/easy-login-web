'use client'

import { useCallback, useEffect, useState } from 'react'
import { SideBasic, SideFooter } from '@/src/entities/sideMenu'
import { userAction } from '@/src/entities/user/model/user-action'
import type { UserType } from '@/src/entities/user/type'
import { CashMenu, UserMenu } from '@/src/features/activeSide/ui'

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
  })
  const handleGetUserInfo = useCallback(async () => {
    const response = await userAction()
    setUser(response.data)
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
          <CashMenu sideOn={sideOn} cash={user?.cash ?? -1} />
          <hr className="border-gray2" />
        </>
      )}

      <div className="flex flex-1 flex-col gap-[30px] p-[20px]">
        <SideBasic sideOn={sideOn} />
        {isLogin && <UserMenu sideOn={sideOn} />}
      </div>
      <hr className="border-gray2" />
      <SideFooter sideOn={sideOn} isLogin={isLogin} name={user?.name ?? undefined} />
    </>
  )
}
