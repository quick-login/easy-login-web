import clsx from 'clsx'
import { LinkText } from './LinkText'
import type { ComponentProps, ReactNode } from 'react'

type Props = {
  children: ReactNode
  href: string
} & ComponentProps<'li'>

export const PageButton = ({ className, children, href, ...props }: Props) => {
  return (
    <li
      className={clsx(
        'font-pretendard hover:bg-gray2 border-gray3 cursor-pointer rounded-[10px] border font-semibold md:py-[5px]',
        className,
      )}
      {...props}
    >
      <LinkText className="h-full px-[5px] text-[11px] md:px-[10px] md:py-[5px] md:text-[16px]" href={href}>
        {children}
      </LinkText>
    </li>
  )
}
