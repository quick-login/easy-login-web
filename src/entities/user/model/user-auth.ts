'use server'

import { userLogoutAction } from './user-action'
import { signIn, signOut, auth, update } from '@/auth'

export const signInwidthCredentials = async (formData: FormData) => {
  await signIn('credentials', {
    email: formData.get('email') || '',
    password: formData.get('password') || '',
  })
}

export const signOutWidthForm = async () => {
  await signOut({ redirect: false })
  await userLogoutAction()
}

export const clearSession = async () => {
  await signOut({ redirect: true })
}

export { auth as getSession, update as updateSession }
