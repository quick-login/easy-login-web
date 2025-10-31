import { create } from 'zustand'

type Modal = {
  isAdminSell: boolean
  isUserSell: boolean
  isOrder: boolean
}

type ModalProps = {
  setModal: (key: keyof Modal, value: boolean) => void
} & Modal

export const useModalStore = create<ModalProps>(set => ({
  isAdminSell: false,
  isUserSell: false,
  isOrder: false,
  setModal: (key: keyof Modal, value: boolean) =>
    set(state => ({
      ...state,
      [key]: value,
    })),
}))
