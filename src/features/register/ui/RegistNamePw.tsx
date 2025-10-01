'use client'
import { useState } from 'react'
import { Input, InputPassword, Text } from '@/src/shared/ui'
import type { RegistNamePwProps } from '../type'

export const RegistNamePw = ({ name, pw, pwCheck, onChange, children }: RegistNamePwProps) => {
  const [hide, setHide] = useState<Array<boolean>>([true, true])
  const onToggleHide = (idx: number) => {
    setHide(prev => {
      const newHide = [...prev]
      newHide[idx] = !newHide[idx]
      return newHide
    })
  }
  return (
    <div className="flex w-full flex-col gap-[10px]">
      {children}
      <Input className="w-full" type="text" name="name" value={name!} place="이름 입력" onChange={onChange} />
      <div className="flex flex-col gap-[6px]">
        <InputPassword
          name="pw"
          value={pw!}
          place="비밀번호 입력"
          onChange={onChange}
          isHide={hide[0]}
          onToggle={() => onToggleHide(0)}
        />
        <Text className="text-negative text-[16px] leading-[150%] font-normal">비밀번호가 형식이 올바르지 않아요</Text>
      </div>
      <div className="flex flex-col gap-[6px]">
        <InputPassword
          name="pwCheck"
          value={pwCheck!}
          place="비밀번호 다시 입력"
          onChange={onChange}
          isHide={hide[1]}
          onToggle={() => onToggleHide(1)}
        />
        <Text className="text-negative text-[16px] leading-[150%] font-normal">비밀번호가 일치하지 않아요</Text>
      </div>
    </div>
  )
}
