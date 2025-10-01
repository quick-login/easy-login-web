'use client'

import { useState } from 'react'
import { Input, InputPassword, Text } from '@/src/shared/ui'
import type { LoginProps } from '../type'

export const LoginInputs = ({ email, pw, isError, onChange }: LoginProps) => {
  const [hide, setHide] = useState<boolean>(true)
  const onToggleHide = () => {
    setHide(prev => !prev)
  }
  return (
    <div className="flex w-full flex-col gap-[10px]">
      <Input className="w-full" type="text" name="email" value={email} place="이메일 입력" onChange={onChange} />
      <InputPassword
        name="pw"
        value={pw}
        place="비밀번호 입력"
        onChange={onChange}
        isHide={hide}
        onToggle={onToggleHide}
      />
      {isError && (
        <Text className="text-negative text-[16px] leading-[150%] font-normal">
          아이디 혹은 비밀번호를 다시 입력해주세요
        </Text>
      )}
    </div>
  )
}
