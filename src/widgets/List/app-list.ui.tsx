'use client'

import { AppHeader } from '../header/app-header.ui'
import { SocialAppItem } from '@/src/entities/social'
import { useAppList } from '@/src/entities/social/model/useAppList'
import { Text } from '@/src/shared/ui'

export const AppList = () => {
  const { appList } = useAppList()
  return (
    <>
      <AppHeader title="내 앱 관리" count={appList.length} />
      <hr className="border-gray2" />
      <div className="flex flex-1 flex-col gap-[10px] p-[20px]">
        {appList.length > 0 ? (
          appList.map(app => <SocialAppItem appId={app.appId} appName={app.appName} />)
        ) : (
          <Text className="text-gray5 font-semibold">앱이 존재하지 않습니다.</Text>
        )}
      </div>
    </>
  )
}
