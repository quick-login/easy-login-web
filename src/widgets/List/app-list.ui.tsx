'use client'

import { useRouter } from 'next/navigation'
import { LoadingSkeleton } from './skeleton-list.ui'
import { AppHeader } from '../header/app-header.ui'
import { SocialAppItem, useAppList } from '@/entities/social'
import { Text } from '@/shared/ui'

export const AppList = () => {
  const { appList, isLoading } = useAppList()
  const router = useRouter()

  if (isLoading) return <LoadingSkeleton />
  return appList.length === 0 ? (
    <>
      <AppHeader title="내 앱 관리" count={appList.length} />
      <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
        <Text className="text-gray5 font-semibold">앱이 존재하지 않습니다.</Text>
      </div>
    </>
  ) : (
    <>
      <AppHeader title="내 앱 관리" count={appList.length} />
      <hr className="border-gray2" />
      <table className="flex flex-1 flex-col gap-[10px] p-[10px]">
        {appList.map(app => (
          <SocialAppItem
            key={app.appId}
            appId={app.appId}
            appName={app.appName}
            onMove={() => router.push(`/kakao/app/${app.appId}`)}
          />
        ))}
      </table>
    </>
  )
}
