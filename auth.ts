import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import type { ResponseType } from './src/shared/api/axios-client'

type CredentialsType = {
  name: string
  email: string
  cash: number
  remainCount: number
  maxKakaoAppCount: number
  role: string
  accessToken: string
  refreshToken: string
}

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: update, // Beta!
} = NextAuth({
  providers: [
    Credentials({
      authorize: async credentials => {
        const { name, email, cash, remainCount, maxKakaoAppCount, role, accessToken, refreshToken } =
          credentials as CredentialsType
        const user = {
          name: name,
          email: email,
          cash: cash,
          remainCount: remainCount,
          maxKakaoAppCount: maxKakaoAppCount,
          role: role,
          accessToken: accessToken,
          refreshToken: refreshToken,
        }

        return user
      },
    }),
  ],
  session: {
    strategy: 'jwt', // JSON Web Token 사용
    maxAge: 60 * 60 * 24, // 세션 만료 시간(sec)
  },
  pages: {
    signIn: '/login', // Default: '/auth/signin'
  },
  callbacks: {
    signIn: async () => {
      return true
    },
    jwt: async ({ token, user, trigger, session }) => {
      if (user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.cash = user.cash
        token.remainCount = user.remainCount
        token.maxKakaoAppCount = user.maxKakaoAppCount
        token.role = user.role
      }
      if (trigger === 'update' && session) {
        Object.assign(token, session.user)
      }
      return token
    },
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken as string
      session.refreshToken = token.refreshToken as string
      session.user = {
        ...session.user,
        cash: token.cash as number,
        remainCount: token.remainCount as number,
        maxKakaoAppCount: token.maxKakaoAppCount as number,
        role: token.role as string,
      }
      return session
    },
  },
})
