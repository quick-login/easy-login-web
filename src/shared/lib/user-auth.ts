'use server'
import { redirect } from 'next/navigation'
import { signOut, auth, update } from '../../../auth'

export const clearSession = async () => {
  await signOut({ redirect: false })
  redirect('/login')
}

export { auth as getSession, update as updateSession }
