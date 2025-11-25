import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

type CredentialsType = {
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
  trustHost: true,
  providers: [
    Credentials({
      authorize: async credentials => {
        const { role, accessToken, refreshToken } = credentials as CredentialsType
        const user = {
          role: role,
          accessToken: accessToken,
          refreshToken: refreshToken,
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
        token.role = user.role
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
        role: token.role as string,
      }
      return session
    },
  },
})
