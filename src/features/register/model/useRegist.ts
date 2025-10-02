import { useState } from 'react'
import { postEmailCheck } from '../api/email-api'
import { postRegist } from '../api/regist-api'
import type { EmailCheckType, RegistType } from '../type'

export const useRegist = () => {
  const [check, setCheck] = useState<EmailCheckType>({
    isEmail: false,
    message: '중복 확인이 필요해요',
  })
  const [regist, setRegist] = useState<RegistType>({
    email: '',
    name: '',
    password: '',
    passwordCheck: '',
    kakaoId: null,
  })

  const handleChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'email') setCheck({ isEmail: false, message: '중복 확인이 필요해요' })
    setRegist(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleEmailCheck = async () => {
    if (check.isEmail || regist.email.length === 0) return
    const res = await postEmailCheck(regist.email)
    if (res.data) setCheck({ isEmail: true, message: '사용 가능해요' })
    else setCheck({ isEmail: false, message: '중복된 이메일이 있어요' })
  }

  const handleRegist = async () => {
    const res = await postRegist(regist)
    if (res.data) return
  }

  return { regist, handleChangeRegister, handleEmailCheck, check, handleRegist }
}
