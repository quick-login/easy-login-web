import { type ChangeEvent, useState } from 'react'
import { postCheckEmailCode, postCreateEmailCode } from '../api/email-api'
import { type EmailCheckType } from '../type'

export const useEmail = (email: string) => {
  const [code, setCode] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [Invalid, setInvalid] = useState<EmailCheckType>({
    isFlag: false,
    message: '',
  })

  const handleChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value)
  }
  const handleModalClose = () => {
    setIsOpen(false)
    setCode('')
  }

  const handleEmailCheck = async () => {
    const res = await postCreateEmailCode(email)
    if (res.code === 'E200') {
      setIsOpen(true)
      setInvalid({ isFlag: true, message: '' })
    } else {
      setInvalid({ isFlag: false, message: '중복된 이메일이 존재해요' })
    }
  }

  const handleEmailCode = async () => {
    const res = await postCheckEmailCode({ email, code })

    if (res.code === 'E200') {
      setInvalid({ isFlag: true, message: '이메일 인증 완료' })
      setIsOpen(false)
      setCode('')
    } else {
      setInvalid({ isFlag: false, message: '인증코드가 맞지 않아요' })
    }
  }

  return { isOpen, code, Invalid, handleChangeCode, handleEmailCheck, handleEmailCode, handleModalClose }
}
