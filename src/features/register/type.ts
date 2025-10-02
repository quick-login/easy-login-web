export interface EmailCheckType {
  isEmail: boolean
  message: '중복 확인이 필요해요' | '중복된 이메일이 있어요' | '사용 가능해요'
}

export interface RegistType {
  name: string
  email: string
  password: string
  passwordCheck: string
  kakaoId: null
}

export interface RegistEmailProps extends Partial<RegistType> {
  check: EmailCheckType
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onEmailCheck: () => void
}
export interface RegistNamePwProps extends Partial<RegistType> {
  children: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
