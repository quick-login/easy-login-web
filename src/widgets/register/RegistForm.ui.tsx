'use client'

import { useState } from 'react'
import { RegistEmail, RegistNamePw } from '@/src/features/register/ui'
import { Button } from '@/src/shared/ui'

export const RegistForm = () => {
  const [regist, setRegist] = useState({
    email: '',
    name: '',
    pw: '',
    pwCheck: '',
  })

  const handleChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegist(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <>
      <RegistNamePw name={regist.name} pw={regist.pw} pwCheck={regist.pwCheck} onChange={handleChangeRegister}>
        <RegistEmail email={regist.email} onChange={handleChangeRegister} />
      </RegistNamePw>
      <Button className="w-full" onClick={() => {}}>
        회원가입
      </Button>
    </>
  )
}
