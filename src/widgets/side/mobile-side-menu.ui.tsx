'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { SideBasic, SideFooter, SideHeader } from '../../entities/sideMenu'
import { CashMenu, UserMenu } from '../../features/activeSide/ui'

export const MobileSideMenu = () => {
  const [sideOn, setSideOn] = useState<boolean>(true)

  const handleToggleSide = () => {
    setSideOn(prev => !prev)
  }
  return <section></section>
}
