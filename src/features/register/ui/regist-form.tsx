'use client'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { RegistEmailCode } from './email-code'
import { handleCreateCode, handleValidateCode } from '../model/email-action'
import { handleRegist } from '../model/regist-action'
import { useRegist } from '../model/useRegist'
import { useRegistValidate } from '../model/useValidate'
import { Button, Input, InputPassword, Modal, Text } from '@/src/shared/ui'
import type { CreateActionType, ValidateActionType } from '../type'

export const RegistForm = () => {
  const { regist, handleChangeRegister } = useRegist()
  const { pwSame, pwValidate } = useRegistValidate(regist)
  const codeFormRef = useRef<HTMLFormElement>(null)
  const router = useRouter()

  const [isModal, setModal] = useState<boolean>(false)
  const [isRegistModal, setRegistModal] = useState<boolean>(false)
  const [emailRes, setEmailRes] = useState<CreateActionType>({
    success: false,
    message: '',
  })
  const [codeRes, setCodeRes] = useState<ValidateActionType>({
    success: false,
    message: '',
  })
  const [RegistRes, setRegistRes] = useState({
    success: false,
    message: '',
  })

  const handleRegistSuccess = () => {
    if (RegistRes.success) {
      router.push('/login')
    } else {
      setRegistModal(false)
    }
  }

  const handleCodeModalClose = () => {
    setModal(false)
    setCodeRes({ success: false, message: '' })
    codeFormRef.current?.reset()
  }

  const registAction = async (formData: FormData) => {
    const res = await handleRegist(formData)
    setRegistModal(true)
    setRegistRes({ success: res.success, message: res.message })
  }

  const createCodeAction = async (formData: FormData) => {
    const res = await handleCreateCode(formData)
    if (res.success) {
      setModal(true)
      setEmailRes(res)
    } else {
      setEmailRes(res)
    }
  }

  const validateCodeAction = async (formData: FormData) => {
    const res = await handleValidateCode(formData)
    if (res.success) {
      setModal(false)
      setCodeRes(res)
    } else {
      setCodeRes(res)
    }
  }

  return (
    <>
      <form action={registAction} className="flex w-full flex-col gap-[30px]">
        <div className="flex w-full flex-col gap-[10px]">
          <div className="flex flex-col gap-[6px]">
            <div className="flex items-center gap-[10px]">
              <Input
                className="min-w-0 flex-1"
                type="text"
                name="email"
                value={regist.email}
                placeholder="이메일 입력"
                onChange={handleChangeRegister}
                read={codeRes.success}
              />
              <Button
                type={codeRes.success || regist.email.length === 0 ? 'button' : 'submit'}
                className="gap-[10px] p-[15px]"
                variant={codeRes.success || regist.email.length === 0 ? 'noActive' : 'primary'}
                formAction={createCodeAction}
              >
                인증하기
              </Button>
            </div>
            <Text className={clsx('text-negative text-[16px] leading-[150%] font-normal')}>{emailRes.message}</Text>
            {codeRes.success && (
              <Text className={clsx('text-[16px] leading-[150%] font-normal', 'text-positive')}>{codeRes.message}</Text>
            )}
          </div>
          <Input
            className="w-full"
            type="text"
            name="name"
            value={regist.name!}
            placeholder="이름 입력"
            onChange={handleChangeRegister}
          />
          <div className="flex flex-col gap-[6px]">
            <InputPassword
              name="password"
              value={regist.password!}
              placeholder="비밀번호 입력"
              onChange={handleChangeRegister}
            />
            {pwValidate && (
              <Text className="text-negative text-[16px] leading-[150%] font-normal">
                숫자,영문자,특수문자 조합으로 6~30자
              </Text>
            )}
          </div>
          <div className="flex flex-col gap-[6px]">
            <InputPassword
              name="passwordCheck"
              value={regist.passwordCheck!}
              placeholder="비밀번호 다시 입력"
              onChange={handleChangeRegister}
            />
            {!pwSame && (
              <Text className="text-negative text-[16px] leading-[150%] font-normal">비밀번호가 일치하지 않아요</Text>
            )}
          </div>
        </div>
        <Button
          type={!pwValidate && pwSame && codeRes.success && regist.name.length > 0 ? 'submit' : 'button'}
          className="w-full gap-[10px] p-[15px]"
          variant={!pwValidate && pwSame && codeRes.success && regist.name.length > 0 ? 'primary' : 'noActive'}
        >
          회원가입
        </Button>
      </form>
      <Modal isOpen={isModal} className="rounded-[20px] bg-white p-[25px]">
        <RegistEmailCode
          codeFormRef={codeFormRef}
          email={regist.email}
          stateCode={codeRes}
          onValidate={validateCodeAction}
          onModal={handleCodeModalClose}
        />
      </Modal>
      <Modal isOpen={isRegistModal} className="rounded-[20px] bg-white p-[25px]">
        <div className="flex flex-col gap-[20px]">
          <Text className="text-dark text-[16px] font-bold">
            {RegistRes.success ? '가입되었습니다! 로그인 후 이용가능합니다.' : RegistRes.message}
          </Text>
          <Button className="w-full gap-[10px] p-[15px]" variant="primary" onClick={handleRegistSuccess}>
            확인
          </Button>
        </div>
      </Modal>
    </>
  )
}
