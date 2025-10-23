'use client'

import { Alert } from './Alert'
import { useAlertStore } from '../store/useAlertStore'
import type { ReactNode } from 'react'

export const Footer = ({ children }: { children: ReactNode }) => {
  const isAlert = useAlertStore(state => state.isAlert)
  return (
    <>
      <footer className="max-400:flex-col max-400:items-center max-400:px-[5px] max-400:gap-[5px] flex justify-between px-[20px] pt-[10px] pb-[20px]">
        {children}
      </footer>
      {isAlert && <Alert />}
    </>
  )
}
