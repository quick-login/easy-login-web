import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

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
        const { email, password } = credentials
        const user = { id: '', name: '', email: '', iamge: '' }
        console.log('ee')
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
      console.log('로그인')
      return true
    },
    jwt: async ({ token, user }) => {
      console.log('토큰')
      return token
    },
    session: async ({ session, token }) => {
      return session
    },
  },
})
