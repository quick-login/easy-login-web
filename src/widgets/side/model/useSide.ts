import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useRefreshInfo } from '@/src/entities/user'
import { useSideStore } from '@/src/shared/store'

export const useSide = () => {
  const { side, mobile, toggleSide, setMobile } = useSideStore()
  const { handleRefreshUser } = useRefreshInfo()
  const pathname = usePathname()

  const handleResize = () => {
    if (window.innerWidth >= 1060) {
      setMobile(false)
      return
    }
  }

  useEffect(() => {
    if (mobile) {
      setMobile(false)
    }
    handleRefreshUser()
  }, [pathname])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { side, mobile, toggleSide, setMobile }
}
