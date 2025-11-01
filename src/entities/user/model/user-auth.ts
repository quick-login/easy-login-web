'use server'

import { signIn, signOut, auth, update } from '@/auth'

export const signInwidthCredentials = async (formData: FormData) => {
  await signIn('credentials', {
    email: formData.get('email') || '',
    password: formData.get('password') || '',
  })
}

export const clearSession = async () => {
  await signOut({ redirect: true })
}

export { auth as getSession, update as updateSession }
