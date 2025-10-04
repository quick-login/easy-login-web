'use client'

import { useLogin } from '../model/useLogin'
import { Button, Input, InputPassword, Text } from '@/src/shared/ui'
import type { LoginProps } from '../type'

export const LoginForm = () => {
  const { login, handleChangeLogin, isError, handleLogin, IsNotInput } = useLogin()

  return (
    <div className="flex w-full flex-col gap-[10px]">
      <Input
        className="w-full"
        type="text"
        name="email"
        value={login.email}
        place="이메일 입력"
        onChange={handleChangeLogin}
      />
      <InputPassword name="password" value={login.password} place="비밀번호 입력" onChange={handleChangeLogin} />
      {isError && (
        <Text className="text-negative text-[16px] leading-[150%] font-normal">
          아이디 혹은 비밀번호를 다시 입력해주세요
        </Text>
      )}
      <Button
        className="w-full gap-[10px] p-[15px]"
        variant={IsNotInput() ? 'primary' : 'noActive'}
        onClick={handleLogin}
      >
        로그인
      </Button>
    </div>
  )
}
