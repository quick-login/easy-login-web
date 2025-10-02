'use client'

import { useState } from 'react'
import { Input, Text } from '@/src/shared/ui'

export const UpdateAppForm = () => {
  const [app, setApp] = useState({
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
  return (
    <div className="flex flex-1 flex-col gap-[10px] p-[20px]">
      <Text className="text-gray4 text-[16px] leading-[100%] font-medium">app ID : 123456</Text>
      <Input
        className="placeholder-gray4 border-gray3 w-full gap-[10px] rounded-[10px] border p-[15px] leading-[150%] font-normal text-black outline-0"
        type="text"
        name="name"
        value={app.name}
        place="app name 입력"
        onChange={handleChangeApp}
      />
      <Input
        className="placeholder-gray4 border-gray3 w-full gap-[10px] rounded-[10px] border p-[15px] leading-[150%] font-normal text-black outline-0"
        type="text"
        name="rest"
        value={app.rest}
        place="rest key 입력"
        onChange={handleChangeApp}
      />
      <Input
        className="placeholder-gray4 border-gray3 w-full gap-[10px] rounded-[10px] border p-[15px] leading-[150%] font-normal text-black outline-0"
        type="text"
        name="redirect"
        value={app.redirect}
        place="redirect URL 입력 (선택)"
        onChange={handleChangeApp}
      />
    </div>
  )
}
