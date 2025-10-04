'use client'

import { useState } from 'react'
import { postLogin } from '../api/login-api'
import type { LoginType } from '../type'

export const useLogin = () => {
  const [login, setLogin] = useState<LoginType>({
    email: '',
    password: '',
  })
  const [isError, setIsError] = useState(false)

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLogin(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const IsNotInput = () => {
    if (login.email.length === 0 || login.password.length === 0) return false
    return true
  }

  const handleLogin = async () => {
    if (!IsNotInput()) return
    const res = await postLogin(login)
    if (res.data === null) {
      setIsError(true)
      setLogin({ email: '', password: '' })
    } else console.log(res)
  }

  return { login, handleChangeLogin, IsNotInput, isError, handleLogin }
}
