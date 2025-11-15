'use client'

import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useCallback, useEffect, useRef } from 'react'
import { useRefreshInfo } from '@/entities/user'
import { useSideStore } from '@/shared/store'

export const useSide = () => {
  const { data: session, status } = useSession()
  const { side, mobile, toggleSide, setMobile } = useSideStore()
  const { handleRefreshUser } = useRefreshInfo()
  const pathname = usePathname()

  const isAbove1060 = useRef<boolean | null>(null)

  const handleResize = useCallback(() => {
    const nowAbove = window.innerWidth >= 1060
    if (isAbove1060.current !== nowAbove) {
      isAbove1060.current = nowAbove

      if (nowAbove) {
        setMobile(false)
      }
    }
  }, [setMobile])

  useEffect(() => {
    if (mobile) setMobile(false)
    if (status === 'authenticated') {
      handleRefreshUser(session)
    }
  }, [pathname, status])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { side, mobile, toggleSide, setMobile }
}
