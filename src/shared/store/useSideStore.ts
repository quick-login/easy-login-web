import { create } from 'zustand'

type SideProps = {
  side: boolean
  mobile: boolean
  toggleSide: () => void
  setMobile: (isMobile: boolean) => void
}

export const useSideStore = create<SideProps>()(set => ({
  side: true,
  mobile: false,
  toggleSide: () => set(state => ({ side: !state.side })),
  setMobile: (isMobile: boolean) => set({ mobile: isMobile }),
}))
