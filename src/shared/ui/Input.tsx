import clsx from 'clsx'
import type { ComponentProps } from 'react'

export const Input = ({ ...props }: ComponentProps<'input'>) => {
  return (
    <input
      {...props}
      className={clsx(
        'border-gray3 placeholder:text-gray4 font-pretendard rounded-[10px] border p-[15px] text-[16px] text-black outline-0',
        props.className,
        props.readOnly && 'bg-gray1',
      )}
    />
  )
}
