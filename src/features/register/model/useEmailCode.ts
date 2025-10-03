import { type ChangeEvent, useState } from 'react'
import { postCheckEmailCode } from '../api/email-api'
import { type EmailCheckType } from '../type'

export const useEmailCode = (email: string) => {
  const [code, setCode] = useState<string>('')
  const [Invalid, setInvalid] = useState<EmailCheckType>({
    isFlag: false,
    message: '',
  })

  const handleChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value)
  }

  const handleEmailCode = async () => {
    const res = await postCheckEmailCode({ email, code })

    if (res.code === 'E200') setInvalid({ isFlag: true, message: '이메일 인증 완료' })
    else setInvalid({ isFlag: false, message: '인증코드가 맞지 않아요' })
  }

  return { code, Invalid, handleChangeCode, handleEmailCode }
}
