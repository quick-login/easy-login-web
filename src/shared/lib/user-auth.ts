'use server'
import { signOut, auth, update } from '../../../auth'

export const clearSession = async () => {
  await signOut({ redirect: true, redirectTo: '/login' })
}

export { auth as getSession, update as updateSession }
