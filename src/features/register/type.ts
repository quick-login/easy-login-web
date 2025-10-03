export interface EmailCheckType {
  isFlag: boolean
  message: '중복된 이메일이 존재해요' | '이메일 인증 완료' | '인증코드가 맞지 않아요' | ''
}

export interface RegistType {
  name: string
  email: string
  password: string
  passwordCheck: string
  kakaoId: null
}

export type EmailCodeType = {
  email: string
  code: string
}

export type EmailCodeProps = {
  code: string
  check: EmailCheckType
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onEmailCode: () => void
  onModalOpen: () => void
}

export interface RegistEmailProps extends Partial<RegistType> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export interface RegistNamePwProps extends Partial<RegistType> {
  children: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
