export type LoginRes = {
  accessToken: string
  refreshToken: string
}

export interface LoginType {
  email: string
  password: string
}
