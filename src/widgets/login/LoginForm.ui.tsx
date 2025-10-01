'use client'

import { useState } from 'react'
import { LoginInputs } from '@/src/features/login/ui'
import { setCookies } from '@/src/shared/lib/cookie'
import { Button, Text } from '@/src/shared/ui'

export const LoginForm = () => {
  const [isError, setIsError] = useState(false)
  const [login, setLogin] = useState({
    email: '',
    pw: '',
  })

  const handleCreateCookie = async () => {
    await setCookies('token', 'test')
    // setIsError(true)
  }

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLogin(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <>
      <LoginInputs email={login.email} pw={login.pw} isError={isError} onChange={handleChangeLogin} />
      <Button className="w-full gap-[10px] p-[15px]" onClick={handleCreateCookie}>
        로그인
      </Button>
    </>
  )
}
