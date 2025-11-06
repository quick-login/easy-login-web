'use client'

import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRefreshInfo } from '@/entities/user'
import { useSideStore } from '@/shared/store'

export const useSide = () => {
  const { data: session, status, update } = useSession()
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
    if (status === 'authenticated') {
      // handleRefreshUser(session)
      handleRefreshUser(session, update)
    }
  }, [pathname, status])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { side, mobile, toggleSide, setMobile }
}
