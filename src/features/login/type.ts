export type LoginProps = {
  email: string
  pw: string
  isError: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
