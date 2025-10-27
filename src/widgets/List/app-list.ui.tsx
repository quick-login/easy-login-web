'use client'

import { AppHeader } from '../header/app-header.ui'
import { SocialAppItem } from '@/src/entities/social'
import { useAppList } from '@/src/entities/social/model/useAppList'

export const AppList = () => {
  const { appList } = useAppList()
  return (
    <>
      <AppHeader title="내 앱 관리" count={appList.length} />
      <hr className="border-gray2" />
      <div className="flex flex-1 flex-col gap-[10px] p-[20px]">
        {appList.map(app => (
          <SocialAppItem appId={app.appId} appName={app.appName} />
        ))}
      </div>
    </>
  )
}
