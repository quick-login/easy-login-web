'use server'
import { signOut, auth, update } from '../../../auth'

export const clearSession = async () => {
  await signOut({ redirect: true })
}

export { auth as getSession, update as updateSession }
