'use client'

import clsx from 'clsx'
import type { ComponentProps } from 'react'

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  className?: string
  children: string
  onClick?: () => void
  variant?: 'primary' | 'cancle' | 'noActive'
  formAction?: (formData: FormData) => Promise<void>
} & ComponentProps<'button'>

export const Button = ({
  type = 'button',
  className,
  children,
  onClick = () => {},
  variant = 'primary',
  formAction,
  ...props
}: ButtonProps) => {
  const base = 'font-pretendard h-[50px] rounded-[10px] text-[16px]'
  const variants = {
    primary: 'bg-black text-white cursor-pointer',
    cancle: 'bg-white text-gray4 border border-gray3 cursor-pointer',
    noActive: 'bg-gray1 text-gray4 border border-gray3',
  }
  return (
    <button
      {...props}
      type={type}
      className={clsx(base, variants[variant], className)}
      onClick={() => variant !== 'noActive' && onClick()}
      {...(type === 'submit' && formAction ? { formAction } : {})}
    >
      {children}
    </button>
  )
}
