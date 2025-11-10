'use client'

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { SideBasic, SideCash, SideFooter, SideItem } from '@/entities/sideMenu'

type SideContentProps = {
  mobile: boolean
  sideOn: boolean
}

export const SideContent = ({ mobile, sideOn }: SideContentProps) => {
  const { data: session, update } = useSession()

  console.log('사이드 콘텐츠 영역')

  useEffect(() => {
    console.log('업데이트')
    update()
  }, [])

  return (
    <>
      {session && (
        <>
          <SideCash mobile={mobile} cash={session?.user?.cash ?? 0} sideOn={sideOn} />
          <hr className="border-gray2" />
        </>
      )}

      <div className="scrollbar-hidden flex flex-1 flex-col gap-[15px] overflow-auto p-[20px]">
        <SideBasic role={session?.user?.role} mobile={mobile} sideOn={sideOn} />
        {session && <SideItem mobile={mobile} sideOn={sideOn} />}
      </div>
      <hr className="border-gray2" />
      <SideFooter mobile={mobile} sideOn={sideOn} isLogin={Boolean(session)} name={session?.user?.name ?? undefined} />
    </>
  )
}
