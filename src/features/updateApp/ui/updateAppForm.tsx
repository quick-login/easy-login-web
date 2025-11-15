'use client'

import { useParams, useRouter } from 'next/navigation'
import { useAppInfo } from '@/entities/social'
import { useSocialApp } from '@/features/createApp'
import { Button, Footer, Input, Text } from '@/shared/ui'

export const UpdateAppForm = () => {
  const id = useParams().id
  const { app } = useAppInfo(Number(id))
  const { handlePatch } = useSocialApp()

  const router = useRouter()

  return (
    <>
      <form
        id="social-info-form"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handlePatch(e, new FormData(e.currentTarget))}
        className="flex flex-1 flex-col gap-[10px] p-[10px]"
      >
        <Text className="text-gray4 text-[13px] leading-[100%] font-medium md:text-[16px]">app ID : {app.appId}</Text>
        <Input type="text" name="appId" defaultValue={app.appId!} hidden />
        <Input type="text" name="appName" placeholder="app name 입력" defaultValue={app.appName} />
        <Input type="text" name="restKey" placeholder="rest key 입력" defaultValue={app.restKey} />
        <Input type="text" name="redirectUrl" placeholder="redirect URL 입력" defaultValue={app.redirectUrl ?? ''} />
      </form>
      <hr className="border-gray2" />
      <Footer>
        <div className="400:px-0 flex w-full justify-end gap-[10px] px-[5px]">
          <Button className="400:w-fit w-full p-[15px]" variant="cancle" onClick={() => router.back()}>
            이전으로
          </Button>
          <Button form="social-info-form" type="submit" className="400:w-fit w-full p-[15px]">
            변경사항 저장
          </Button>
        </div>
      </Footer>
    </>
  )
}
