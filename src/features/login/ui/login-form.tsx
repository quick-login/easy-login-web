'use client'

import { useActionState } from 'react'
import { handleLoginAction } from '../model/login-action'
import { Button, Input, InputPassword, Text } from '@/shared/ui'

export const LoginForm = () => {
  const initialState = { success: false, message: '' }
  const [state, dispatch] = useActionState(handleLoginAction, initialState)

  return (
    <form action={dispatch} className="flex w-full flex-col gap-[10px]">
      <Input className="w-full" type="text" name="email" placeholder="이메일 입력" />
      <InputPassword name="password" placeholder="비밀번호 입력" />
      <Text className="text-negative text-[14px] leading-[150%] font-normal md:text-[16px]">{state.message}</Text>
      <Button type="submit" className="w-full gap-[10px] p-[15px]" variant={'primary'}>
        로그인
      </Button>
    </form>
  )
}
