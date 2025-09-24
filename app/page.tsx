'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { setCookies } from '@/src/shared/lib/cookie'
import { Button } from '@/src/shared/ui/Button'
import { Input } from '@/src/shared/ui/Input'
import { LinkText } from '@/src/shared/ui/LinkText'
import { Text } from '@/src/shared/ui/Text'

export default function Home() {
  const [login, setLogin] = useState({
    id: '',
    pw: '',
  })
  const route = useRouter()

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleLogin = async () => {
    await setCookies('token', 'test')
    // route.push('/')
  }
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[30px] border">
      <Text children="로그인" className="text-[28px] font-bold" />
      <div className="flex w-full flex-col gap-[10px]">
        <Input
          className="w-full"
          type="text"
          name="id"
          value={login.id}
          place="이메일 입력"
          onChange={handleChangeLogin}
        />
        <Input
          className="w-full"
          type="password"
          name="pw"
          value={login.pw}
          place="비밀번호 입력"
          onChange={handleChangeLogin}
        />
      </div>
      <Button className="w-full" onClick={handleLogin}>
        로그인
      </Button>
      <div className="flex w-full justify-center gap-[6px]">
        <Text children="아직 회원이 아니신가요?" className="text-gray4 text-[16px]" />
        <LinkText className="cursor-pointer text-[16px] text-black" link="/register">
          회원가입
        </LinkText>
      </div>
    </div>
  )
}
