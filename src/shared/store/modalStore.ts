import { create } from 'zustand'

type ModalState = {
  side: boolean
}

type ModalActions = {
  toggleSide: () => void
}

type ModalStore = ModalState & ModalActions

export const useModalStore = create<ModalStore>()((set, get) => ({
  side: true,
  toggleSide: () => {
    const { side } = get()
    set({ side: !side })
  },
}))
