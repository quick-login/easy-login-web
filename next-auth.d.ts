import 'next-auth'
import '@auth/core/jwt'

declare module 'next-auth' {
  interface User {
    role: string
    accessToken: string
    refreshToken: string
  }
  interface Session {
    role: string
    accessToken: string
    refreshToken: string
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    role: string
    accessToken: string
    refreshToken: string
  }
}
