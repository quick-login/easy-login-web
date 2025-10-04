import { useState } from 'react'
import { postRegist } from '../api/regist-api'
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

  const handleRegist = async () => {
    const res = await postRegist(regist)
    if (res.code === 'E200') {
      console.log(res)
    } else {
      alert('에러')
    }
  }

  return { regist, handleChangeRegister, handleRegist }
}
