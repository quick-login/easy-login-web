'use server'

import { signIn, signOut, auth, update } from '@/auth'

export const signInwidthCredentials = async (formData: FormData) => {
  await signIn('credentials', {
    email: formData.get('email') || '',
    password: formData.get('password') || '',
  })
}

export const signOutWidthForm = async (formData: FormData) => {
  await signOut()
}

export { auth as getSession, update as updateSession }
