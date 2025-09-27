interface RegistType {
  name: string
  email: string
  pw: string
  pwCheck: string
}

export interface RegistEmailProps extends Partial<RegistType> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export interface RegistNamePwProps extends Partial<RegistType> {
  children: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
