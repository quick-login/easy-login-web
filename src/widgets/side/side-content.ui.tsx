'use client'

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { SideBasic, SideCash, SideFooter, SideItem } from '@/entities/sideMenu'
import { useUserStore } from '@/shared/store'

type SideContentProps = {
  mobile: boolean
  sideOn: boolean
}

export const SideContent = ({ mobile, sideOn }: SideContentProps) => {
  const { data: session, update } = useSession()
  const user = useUserStore(state => state.user)

  useEffect(() => {
    update()
  }, [])

  return (
    <>
      {session && (
        <>
          <SideCash mobile={mobile} cash={user.cash} sideOn={sideOn} />
          <hr className="border-gray2" />
        </>
      )}

      <div className="scrollbar-hidden flex flex-1 flex-col gap-[15px] overflow-auto p-[20px]">
        <SideBasic role={user.role} mobile={mobile} sideOn={sideOn} />
        {session && <SideItem mobile={mobile} sideOn={sideOn} />}
      </div>
      <hr className="border-gray2" />
      <SideFooter mobile={mobile} sideOn={sideOn} isLogin={Boolean(session)} name={user.name} />
    </>
  )
}
