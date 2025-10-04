export interface LoginProps extends LoginType {
  isError: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick: () => void
}
export interface LoginType {
  email: string
  password: string
}
