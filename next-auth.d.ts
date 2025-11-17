import 'next-auth'
import '@auth/core/jwt'

declare module 'next-auth' {
  interface User {
    name: string
    email: string
    cash: number
    remainCount: number
    maxKakaoAppCount: number
    role: string
    accessToken: string
    refreshToken: string
    updateAt: string
  }
  interface Session {
    name: string
    email: string
    cash: number
    remainCount: number
    maxKakaoAppCount: number
    role: string
    accessToken: string
    refreshToken: string
    updateAt: string
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    name: string
    email: string
    cash: number
    remainCount: number
    maxKakaoAppCount: number
    role: string
    accessToken: string
    refreshToken: string
    updateAt: string
  }
}
