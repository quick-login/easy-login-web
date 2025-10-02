'use client'

import { RegistEmail } from './RegistEmail'
import { useRegist } from '../model/useRegist'
import { useRegistValidate } from '../model/useValidate'
import { Button, Input, InputPassword, Text } from '@/src/shared/ui'

export const RegistForm = () => {
  const { regist, handleChangeRegister, handleEmailCheck, check, handleRegist } = useRegist()
  const { pwSame, pwValidate } = useRegistValidate(regist)
  return (
    <>
      <div className="flex w-full flex-col gap-[10px]">
        <RegistEmail
          email={regist.email}
          onChange={handleChangeRegister}
          onEmailCheck={handleEmailCheck}
          check={check}
        />
        <Input
          className="w-full"
          type="text"
          name="name"
          value={regist.name!}
          place="이름 입력"
          onChange={handleChangeRegister}
        />
        <div className="flex flex-col gap-[6px]">
          <InputPassword
            name="password"
            value={regist.password!}
            place="비밀번호 입력"
            onChange={handleChangeRegister}
          />
          {pwValidate && (
            <Text className="text-negative text-[16px] leading-[150%] font-normal">
              비밀번호가 형식이 올바르지 않아요
            </Text>
          )}
        </div>
        <div className="flex flex-col gap-[6px]">
          <InputPassword
            name="passwordCheck"
            value={regist.passwordCheck!}
            place="비밀번호 다시 입력"
            onChange={handleChangeRegister}
          />
          {!pwSame && (
            <Text className="text-negative text-[16px] leading-[150%] font-normal">비밀번호가 일치하지 않아요</Text>
          )}
        </div>
      </div>
      <Button className="w-full gap-[10px] p-[15px]" onClick={handleRegist}>
        회원가입
      </Button>
    </>
  )
}
