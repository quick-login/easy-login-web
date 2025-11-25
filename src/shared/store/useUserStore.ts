import { create } from 'zustand'

type User = {
  name: string
  email: string
  cash: number
  remainCount: number
  maxKakaoAppCount: number
  role: 'USER' | 'ADMIN'
}

type UserSession = {
  user: User
  clearSession: () => void
  setSession: (newSession: User) => void
  updateSession: (key: keyof User, value: unknown) => void
}

export const useUserStore = create<UserSession>((set, get) => ({
  user: {
    name: '',
    email: '',
    cash: 0,
    remainCount: 0,
    maxKakaoAppCount: 0,
    role: 'USER',
  },
  clearSession: () =>
    set({
      user: {
        cash: 0,
        email: '',
        maxKakaoAppCount: 0,
        name: '',
        remainCount: 0,
        role: 'USER',
      },
    }),
  setSession: (newSession: User) =>
    set({
      user: newSession,
    }),
  updateSession: (key: keyof User, value: unknown) =>
    set(state => ({
      ...state,
      user: {
        ...state.user,
        [key]: value,
      },
    })),
}))
