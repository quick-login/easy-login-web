import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useSideStore } from '@/src/shared/store/useSideStore'

export const useSide = () => {
  const { side, mobile, toggleSide, setMobile } = useSideStore()
  const pathname = usePathname()

  useEffect(() => {
    setMobile(false)
  }, [pathname])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1060) {
        useSideStore.setState(state => ({
          ...state,
          mobile: false,
        }))
        return
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { side, mobile, toggleSide, setMobile }
}
