'use client'

import { useParams } from 'next/navigation'
import { useSocialApp } from '../model/useSocialApp'
import { Button, Footer, Input, Text } from '@/shared/ui'

export const CreateAppForm = () => {
  const type = useParams().social
  const { handleCreate } = useSocialApp()

  const SmallHeadLine = () => {
    if (type === 'kakao') return '카카오 디벨로퍼스에서 해당 앱이 미리 등록되어있어야 합니다'
    else if (type === 'naver') return '네이버에서 해당 앱이 미리 등록되어있어야 합니다'
    else if (type === 'google') return '구글에서 해당 앱이 미리 등록되어있어야 합니다'
  }

  return (
    <>
      <form
        id="social-form"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleCreate(e, new FormData(e.currentTarget))}
        className="flex flex-1 flex-col gap-[10px] p-[10px]"
      >
        <Text className="text-gray4 text-[13px] leading-[150%] font-normal md:text-[16px]">{SmallHeadLine()}</Text>
        <Input name="appId" type="text" placeholder="app ID 입력" />
        <Input name="appName" type="text" placeholder="app name 입력" />
        <Input name="restKey" type="text" placeholder="rest key 입력" />
        <Input name="redirectUrl" type="text" placeholder="redirect URL 입력" />
      </form>
      <hr className="border-gray2" />
      <Footer>
        <div className="flex w-full justify-end px-[5px]">
          <Button type="submit" form="social-form" className="400:w-fit w-full p-[15px]">
            앱 등록
          </Button>
        </div>
      </Footer>
    </>
  )
}
