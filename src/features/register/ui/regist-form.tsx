'use client'
import clsx from 'clsx'
import { useRef } from 'react'
import { EmailAuthForm } from './email-auth-form'
import { useEmailValidate } from '../model/useEmailValidate'
import { useRegist } from '../model/useRegist'
import { useRegistValidate } from '../model/useValidate'
import { useAlertStore, useModalStore } from '@/shared/store'
import { Alert, Button, Input, InputPassword, Text } from '@/shared/ui'

export const RegistForm = () => {
  const isAlert = useAlertStore(state => state.isAlert)
  const isEmail = useModalStore(state => state.isEmail)

  const { regist, handleChangeRegist, handleSubmitRegist } = useRegist()
  const { codeRes, emailRes, setCodeRes, handleCreateCode, handleValidateCode } = useEmailValidate()
  const { pwSame, pwValidate } = useRegistValidate(regist)
  const codeFormRef = useRef<HTMLFormElement>(null)

  const handleCodeModalClose = () => {
    setCodeRes({ message: '', success: false })
    codeFormRef.current?.reset()
  }

  return (
    <>
      <form id="regist-form" action={handleSubmitRegist} className="flex w-full flex-col gap-[30px]">
        <div className="flex w-full flex-col gap-[10px]">
          <div className="flex flex-col gap-[6px]">
            <div className="flex items-center gap-[10px]">
              <Input
                className="min-w-0 flex-1"
                type="text"
                name="email"
                value={regist.email}
                placeholder="이메일 입력"
                onChange={handleChangeRegist}
                readOnly={codeRes.success}
              />
              <Button
                type={codeRes.success || regist.email.length === 0 ? 'button' : 'submit'}
                className="gap-[10px] p-[15px]"
                variant={codeRes.success || regist.email.length === 0 ? 'noActive' : 'primary'}
                formAction={handleCreateCode}
              >
                인증하기
              </Button>
            </div>
            <Text className={clsx('text-negative text-[14px] leading-[150%] font-normal md:text-[16px]')}>
              {emailRes.message}
            </Text>
            {codeRes.success && (
              <Text className={clsx('text-[14px] leading-[150%] font-normal md:text-[16px]', 'text-positive')}>
                {codeRes.message}
              </Text>
            )}
          </div>
          <Input
            className="w-full"
            type="text"
            name="name"
            value={regist.name!}
            placeholder="이름 입력"
            onChange={handleChangeRegist}
          />
          <div className="flex flex-col gap-[6px]">
            <InputPassword
              name="password"
              value={regist.password!}
              placeholder="비밀번호 입력"
              onChange={handleChangeRegist}
            />
            {pwValidate && (
              <Text className="text-negative text-[14px] leading-[150%] font-normal md:text-[16px]">
                숫자,영문자,특수문자 조합으로 6~30자
              </Text>
            )}
          </div>
          <div className="flex flex-col gap-[6px]">
            <InputPassword
              name="passwordCheck"
              value={regist.passwordCheck!}
              placeholder="비밀번호 다시 입력"
              onChange={handleChangeRegist}
            />
            {!pwSame && (
              <Text className="text-negative text-[14px] leading-[150%] font-normal md:text-[16px]">
                비밀번호가 일치하지 않아요
              </Text>
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
      {isEmail && (
        <EmailAuthForm
          codeFormRef={codeFormRef}
          email={regist.email}
          stateCode={codeRes}
          onValidate={handleValidateCode}
          onModal={handleCodeModalClose}
        />
      )}
      {isAlert && <Alert />}
    </>
  )
}
