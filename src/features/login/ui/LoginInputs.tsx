import { Input } from '@/src/shared/ui'
import type { LoginProps } from '../type'

export const LoginInputs = ({ email, pw, onChange }: LoginProps) => {
  return (
    <div className="flex w-full flex-col gap-[10px]">
      <Input className="w-full" type="text" name="email" value={email} place="이메일 입력" onChange={onChange} />
      <Input className="w-full" type="password" name="pw" value={pw} place="비밀번호 입력" onChange={onChange} />
    </div>
  )
}
