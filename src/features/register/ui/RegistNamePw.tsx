import { Input, Text } from '@/src/shared/ui'
import type { RegistNamePwProps } from '../type'

export const RegistNamePw = ({ name, pw, pwCheck, onChange, children }: RegistNamePwProps) => {
  return (
    <div className="flex w-full flex-col gap-[10px]">
      {children}
      <Input className="w-full" type="text" name="name" value={name!} place="이름 입력" onChange={onChange} />
      <div className="flex flex-col gap-[6px]">
        <Input className="w-full" type="password" name="pw" value={pw!} place="비밀번호 입력" onChange={onChange} />
        <Text className="text-negative text-[16px]">비밀번호가 형식이 올바르지 않아요</Text>
      </div>
      <div className="flex flex-col gap-[6px]">
        <Input
          className="w-full"
          type="password"
          name="pwCheck"
          value={pwCheck!}
          place="비밀번호 다시 입력"
          onChange={onChange}
        />
        <Text className="text-negative text-[16px]">비밀번호가 일치하지 않아요</Text>
      </div>
    </div>
  )
}
