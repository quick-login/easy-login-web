'use client'

import { useRouter } from 'next/navigation'
import { LoadingSkeleton } from './skeleton-list.ui'
import { SocialAppItem, useAppList } from '@/entities/social'
import { Text } from '@/shared/ui'

export const AppList = () => {
  const { appList, isLoading } = useAppList()
  const router = useRouter()

  if (isLoading) return <LoadingSkeleton />
  return appList.length === 0 ? (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <Text className="text-gray5 text-[14px] font-semibold md:text-[16px]">앱이 존재하지 않습니다.</Text>
    </div>
  ) : (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <Text className="text-[14px] font-semibold text-black md:text-[16px]">
        등록된 카카오 앱 : {appList.length} 개
      </Text>
      <table className="flex-1">
        <tbody className="flex flex-1 flex-col gap-[10px]">
          {appList.map(app => (
            <SocialAppItem
              key={app.appId}
              appId={app.appId}
              appName={app.appName}
              onMove={() => router.push(`/kakao/app/${app.appId}`)}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
