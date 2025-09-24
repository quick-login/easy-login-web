import clsx from 'clsx'
import Link from 'next/link'

type LinkTextProps = {
  className?: string
  children: React.ReactNode
  link: string
}

export const LinkText = ({ className, children, link }: LinkTextProps) => {
  return (
    <Link href={link} className={clsx('font-pretendard text-black', className)}>
      {children}
    </Link>
  )
}
