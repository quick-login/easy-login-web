'use client'

import { useState } from 'react'
import { LoginInputs } from '@/src/features/login/ui'
import { Button } from '@/src/shared/ui'

export const LoginForm = () => {
  const [login, setLogin] = useState({
    email: '',
    pw: '',
  })

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <>
      <LoginInputs email={login.email} pw={login.pw} onChange={handleChangeLogin} />
      <Button className="w-full" onClick={() => {}}>
        로그인
      </Button>
    </>
  )
}
