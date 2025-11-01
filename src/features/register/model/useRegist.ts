import { useState } from 'react'
import type { RegistType } from '../type'

export const useRegist = () => {
  const [regist, setRegist] = useState<RegistType>({
    email: '',
    name: '',
    password: '',
    passwordCheck: '',
    kakaoId: null,
  })

  const handleChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegist(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return { regist, handleChangeRegister }
}
