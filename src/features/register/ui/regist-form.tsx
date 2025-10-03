'use client'

import { RegistEmailCode } from './email-code'
import { RegistEmail } from './RegistEmail'
import { useEmailCode } from '../model/useEmailCode'
import { useRegist } from '../model/useRegist'
import { useRegistValidate } from '../model/useValidate'
import { Button, Input, InputPassword, Text } from '@/src/shared/ui'

export const RegistForm = () => {
  const { regist, handleChangeRegister, handleEmailCheck, check, handleRegist } = useRegist()
  const { code, handleChangeCode, handleEmailCode, Invalid } = useEmailCode(regist.email)
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
        <RegistEmailCode code={code} onChange={handleChangeCode} onEmailCode={handleEmailCode} check={Invalid} />
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
              숫자, 영문자 특수문자를 조합해 6~30자로 입력해주세요.
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
      <Button
        className="w-full gap-[10px] p-[15px]"
        variant={
          !pwValidate && pwSame && Invalid.isFlag && check.isFlag && regist.name.length > 0 ? 'primary' : 'noActive'
        }
        onClick={handleRegist}
      >
        회원가입
      </Button>
    </>
  )
}
