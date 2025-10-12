import clsx from 'clsx'
import Link from 'next/link'

type ButtonProps = {
  link: string
  className?: string
  children: string
}

export const LinkButton = ({ className, children, link }: ButtonProps) => {
  return (
    <Link
      href={link}
      className={clsx(
        'font-pretendard h-[50px] cursor-pointer rounded-[10px] bg-black text-[16px] text-white',
        className,
      )}
    >
      {children}
    </Link>
  )
}
