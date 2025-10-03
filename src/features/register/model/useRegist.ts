import { useState } from 'react'
import { postCreateEmailCode } from '../api/email-api'
import { postRegist } from '../api/regist-api'
import type { EmailCheckType, RegistType } from '../type'

export const useRegist = () => {
  const [check, setCheck] = useState<EmailCheckType>({
    isFlag: false,
    message: '',
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
    if (name === 'email') setCheck({ isFlag: false, message: '' })
    setRegist(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleEmailCheck = async () => {
    const res = await postCreateEmailCode(regist.email)
    if (res.code === 'E200') setCheck({ isFlag: true, message: '해당 메일로 인증코드를 보냈어요' })
    else setCheck({ isFlag: false, message: '중복된 이메일이 존재해요' })
  }

  const handleRegist = async () => {
    const res = await postRegist(regist)
    if (res.data) return
  }

  return { regist, handleChangeRegister, handleEmailCheck, check, handleRegist }
}
