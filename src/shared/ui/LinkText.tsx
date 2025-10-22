import clsx from 'clsx'
import Link, { type LinkProps } from 'next/link'
import type { ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
} & LinkProps

export const LinkText = ({ className, children, ...props }: Props) => {
  return (
    <Link className={clsx('font-pretendard text-black', className)} {...props}>
      {children}
    </Link>
  )
}
