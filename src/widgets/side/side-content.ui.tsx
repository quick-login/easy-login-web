'use client'

import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useCallback, useEffect, useState } from 'react'
import { update } from '@/auth'
import { SideBasic, SideCash, SideFooter, SideItem } from '@/src/entities/sideMenu'
import { userAction } from '@/src/entities/user/model/user-action'
import type { UserType } from '@/src/entities/user/type'

type SideContentProps = {
  mobile: boolean
  isLogin: boolean
  sideOn: boolean
}

export const SideContent = ({ isLogin, mobile, sideOn }: SideContentProps) => {
  const { data: session, status, update } = useSession()

  useEffect(() => {
    update()
  }, [])
  // const [user, setUser] = useState<UserType>({
  //   name: '',
  //   cash: 0,
  //   email: '',
  //   maxKakaoAppCount: 0,
  //   remainCount: 0,
  //   role: 'USER',
  // })
  // const handleGetUserInfo = useCallback(async () => {
  //   const response = await userAction()
  //   console.log('사용자 정보 요청할거야')
  //   if (response.success) {
  //     setUser(response.data)
  //     console.log('사용자 정보 불러옴')
  //   } else {
  //     redirect('/login')
  //   }
  // }, [isLogin])

  // useEffect(() => {
  //   if (isLogin) {
  //     handleGetUserInfo()
  //   }
  // }, [isLogin])

  return (
    <>
      {session && (
        <>
          <SideCash mobile={mobile} cash={session?.user?.cash ?? 0} sideOn={sideOn} />
          <hr className="border-gray2" />
        </>
      )}

      <div className="scrollbar-hidden flex flex-1 flex-col gap-[15px] overflow-auto p-[20px]">
        <SideBasic mobile={mobile} sideOn={sideOn} />
        {session && <SideItem mobile={mobile} sideOn={sideOn} />}
      </div>
      <hr className="border-gray2" />
      <SideFooter mobile={mobile} sideOn={sideOn} isLogin={Boolean(session)} name={session?.user?.name ?? undefined} />
    </>
  )
}
