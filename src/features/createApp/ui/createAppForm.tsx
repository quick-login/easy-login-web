'use client'

import { useState } from 'react'
import { CreateAppBtn } from './createAppBtn'
import { Input, Text } from '@/src/shared/ui'

export const CreateAppForm = ({ type }: { type: string }) => {
  const [app, setApp] = useState({
    id: '',
    name: '',
    rest: '',
    redirect: '',
  })

  const handleChangeApp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setApp(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const SmallHeadLine = () => {
    if (type === 'kakao') return '카카오 디벨로퍼스에서 해당 앱이 미리 등록되어있어야 합니다'
    else if (type === 'naver') return '네이버에서 해당 앱이 미리 등록되어있어야 합니다'
    else if (type === 'google') return '구글에서 해당 앱이 미리 등록되어있어야 합니다'
  }

  return (
    <>
      <div className="flex flex-1 flex-col gap-[10px] p-[20px]">
        <Text className="text-gray4 text-[16px] leading-[150%] font-normal">{SmallHeadLine()}</Text>
        <Input
          className="w-full gap-[10px] leading-[150%] font-normal"
          name="id"
          value={app.id}
          type="text"
          place="app ID 입력"
          onChange={handleChangeApp}
        />
        <Input
          className="w-full gap-[10px] leading-[150%] font-normal"
          name="name"
          value={app.name}
          type="text"
          place="app name 입력"
          onChange={handleChangeApp}
        />
        <Input
          className="w-full gap-[10px] leading-[150%] font-normal"
          name="rest"
          value={app.rest}
          type="text"
          place="rest key 입력"
          onChange={handleChangeApp}
        />
        <Input
          className="w-full gap-[10px] leading-[150%] font-normal"
          name="redirect"
          value={app.redirect}
          type="text"
          place="redirect URL 입력 (선택)"
          onChange={handleChangeApp}
        />
      </div>
      <hr className="border-gray2" />
      <CreateAppBtn />
    </>
  )
}
