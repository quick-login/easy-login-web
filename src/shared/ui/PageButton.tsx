import clsx from 'clsx'
import type { ComponentProps } from 'react'

export const PageButton = ({ className, ...props }: ComponentProps<'li'>) => {
  return (
    <li
      className={clsx(
        'font-pretendard hover:bg-gray2 border-gray3 cursor-pointer rounded-[10px] border px-[10px] py-[5px] text-[16px] font-semibold',
        className,
      )}
      {...props}
    >
      {props.children}
    </li>
  )
}
