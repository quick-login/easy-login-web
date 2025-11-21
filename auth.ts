import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

type CredentialsType = {
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
        const { name, email, cash, remainCount, maxKakaoAppCount, role, accessToken, refreshToken, updateAt } =
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
          updateAt: updateAt,
        }

        return user
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 14 * 24 * 60 * 60,
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    signIn: async () => {
      return true
    },
    jwt: async ({ token, user, trigger, session }) => {
      // console.log('🔹 jwt trigger:', trigger)
      // console.log('🔹 incoming session.user:', session?.user)
      // console.log('🔹 current token:', token)
      if (user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.cash = user.cash
        token.remainCount = user.remainCount
        token.maxKakaoAppCount = user.maxKakaoAppCount
        token.role = user.role
        token.updateAt = user.updateAt
      }
      if (trigger === 'update' && session) {
        Object.assign(token, session.user)
      }
      return token
    },
    session: async ({ session, token }) => {
      session.user = {
        ...session.user,
        accessToken: token.accessToken as string,
        refreshToken: token.refreshToken as string,
        cash: token.cash as number,
        remainCount: token.remainCount as number,
        maxKakaoAppCount: token.maxKakaoAppCount as number,
        role: token.role as string,
        updateAt: token.updateAt as string,
      }
      return session
    },
  },
})
