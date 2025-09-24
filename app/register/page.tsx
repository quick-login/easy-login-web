'use client'

import { useState } from 'react'
import { Button } from '@/src/shared/ui/Button'
import { Input } from '@/src/shared/ui/Input'
import { LinkText } from '@/src/shared/ui/LinkText'
import { Text } from '@/src/shared/ui/Text'

const RegisterPage = () => {
  const [register, setRegister] = useState({
    id: '',
    name: '',
    pw: '',
    pwCheck: '',
  })

  const handleChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[30px] border">
      <Text children="회원가입" className="text-[28px] font-bold" />
      <div className="flex w-full flex-col gap-[10px]">
        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center gap-[10px]">
            <Input
              className="w-[90%]"
              type="text"
              name="id"
              value={register.id}
              place="이메일 입력"
              onChange={handleChangeRegister}
            />
            <Button className="w-[10%]" onClick={() => {}}>
              중복확인
            </Button>
          </div>
          <Text className="text-negative text-[16px]">중복 확인이 필요해요</Text>
          {/* <Text className="text-positive text-[16px]">사용할 수 있는 이메일이에요!</Text> */}
        </div>

        <Input
          className="w-full"
          type="text"
          name="name"
          value={register.name}
          place="이름 입력"
          onChange={handleChangeRegister}
        />
        <div className="flex flex-col gap-[6px]">
          <Input
            className="w-full"
            type="password"
            name="pw"
            value={register.pw}
            place="비밀번호 입력"
            onChange={handleChangeRegister}
          />
          <Text className="text-negative text-[16px]">비밀번호가 형식이 올바르지 않아요</Text>
        </div>
        <div className="flex flex-col gap-[6px]">
          <Input
            className="w-full"
            type="password"
            name="pwCheck"
            value={register.pwCheck}
            place="비밀번호 다시 입력"
            onChange={handleChangeRegister}
          />
          <Text className="text-negative text-[16px]">비밀번호가 일치하지 않아요</Text>
        </div>
      </div>
      <Button className="w-full" onClick={() => {}}>
        회원가입
      </Button>
      <div className="flex w-full justify-center gap-[6px]">
        <Text className="text-gray4 text-[16px]">이미 회원이신가요?</Text>
        <LinkText className="cursor-pointer text-[16px] text-black" link="/">
          로그인
        </LinkText>
      </div>
    </div>
  )
}

export default RegisterPage
