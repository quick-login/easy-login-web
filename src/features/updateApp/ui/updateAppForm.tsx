'use client'

import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useSocialApp } from '../../createApp/model/useSocialApp'
import { useAppInfo } from '@/src/entities/social/model/useAppInfo'
import { Button, Footer, Input, Text } from '@/src/shared/ui'

export const UpdateAppForm = () => {
  const params = useParams().id
  const { app } = useAppInfo(Number(params))
  const { handlePatch } = useSocialApp()

  const router = useRouter()

  return (
    <>
      <form
        id="social-info-form"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handlePatch(e, new FormData(e.currentTarget))}
        className="flex flex-1 flex-col gap-[10px] p-[20px]"
      >
        <Text className="text-gray4 text-[16px] leading-[100%] font-medium">app ID : {app.appId}</Text>
        <Input type="text" name="appId" defaultValue={app.appId} hidden />
        <Input type="text" name="appName" placeholder="app name 입력" defaultValue={app.appName} />
        <Input type="text" name="restKey" placeholder="rest key 입력" defaultValue={app.restKey} />
        <Input type="text" name="redirectUrl" placeholder="redirect URL 입력 (선택)" defaultValue={app.redirectUrl} />
      </form>
      <hr className="border-gray2" />
      <Footer>
        <div className="flex cursor-pointer items-center justify-center gap-[4px]">
          <Image src="/trash.svg" alt="delete" width={24} height={24} />
          <Text className="text-negative">삭제</Text>
        </div>
        <div className="flex gap-[10px]">
          <Button className="px-[15px] py-[10px]" variant="cancle" onClick={() => router.back()}>
            이전으로
          </Button>
          <Button form="social-info-form" type="submit" className="px-[15px] py-[10px]">
            변경사항 저장
          </Button>
        </div>
      </Footer>
    </>
  )
}
