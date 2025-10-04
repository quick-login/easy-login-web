import clsx from 'clsx'
import type { ReactNode } from 'react'

type ModalProps = {
  className?: string
  isOpen: boolean
  children: ReactNode
}

export const Modal = ({ className, isOpen, children }: ModalProps) => {
  return (
    <section
      className={clsx(
        'fixed inset-0 flex h-[100vh] w-full items-center justify-center bg-black/50',
        !isOpen && 'hidden',
      )}
    >
      <div className={className}>{children}</div>
    </section>
  )
}
