'use client'

import { useState } from 'react'

export const useTogglePassword = () => {
  const [hide, setHide] = useState<boolean>(true)
  const onToggleHide = () => {
    setHide(prev => !prev)
  }

  return { hide, onToggleHide }
}
