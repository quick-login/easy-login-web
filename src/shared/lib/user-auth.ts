'use server'
import { signOut, auth, update } from '../../../auth'

export const clearSession = async () => {
  console.log('여기까지옴')
  await signOut({ redirect: true, redirectTo: '/login' })
}

export { auth as getSession, update as updateSession }
