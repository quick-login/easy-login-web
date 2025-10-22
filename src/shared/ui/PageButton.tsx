import clsx from 'clsx'
import type { ComponentProps } from 'react'

export const PageButton = ({ ...props }: ComponentProps<'button'>) => {
  return (
    <button
      className={clsx(
        'font-pretendard hover:bg-gray2 border-gray3 cursor-pointer rounded-[10px] border px-[10px] py-[5px] text-[16px] font-semibold',
        props.disabled && 'hidden',
      )}
      {...props}
    >
      {props.children}
    </button>
  )
}
