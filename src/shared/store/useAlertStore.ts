import { create } from 'zustand'

type AlertProps = {
  isAlert: boolean
  msg: string
  onOpenAlert: (text: string) => void
  onCloseAlert: () => void
}

export const useAlertStore = create<AlertProps>()(set => ({
  isAlert: false,
  msg: '',
  onOpenAlert: text => set({ isAlert: true, msg: text }),
  onCloseAlert: () => set({ isAlert: false, msg: '' }),
}))
