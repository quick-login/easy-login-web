import type { Ref } from 'react'

export type CreateActionType = { success: boolean; message: string | null }
export type ValidateActionType = {
  success: boolean
  message: string
}
export interface EmailCheckType {
  isFlag: boolean
  message: string
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
  codeFormRef: Ref<HTMLFormElement> | undefined
  email: string
  stateCode: ValidateActionType
  onValidate: (payload: FormData) => void
  onModal: () => void
}

export interface RegistEmailProps extends Partial<RegistType> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export interface RegistNamePwProps extends Partial<RegistType> {
  children: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
