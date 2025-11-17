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
        'font-pretendard hover:bg-gray2 border-gray3 cursor-pointer rounded-[10px] border py-[5px] font-semibold',
        className,
      )}
      {...props}
    >
      <LinkText className="h-full px-[10px] py-[5px] text-[13px] md:text-[16px]" href={href}>
        {children}
      </LinkText>
    </li>
  )
}
