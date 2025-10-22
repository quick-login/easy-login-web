import clsx from 'clsx'
import Link, { type LinkProps } from 'next/link'

type Props = {
  className?: string
  children: string
} & LinkProps

export const LinkButton = ({ className, children, ...props }: Props) => {
  return (
    <Link
      className={clsx(
        'font-pretendard h-[50px] cursor-pointer rounded-[10px] bg-black text-[16px] text-white',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
