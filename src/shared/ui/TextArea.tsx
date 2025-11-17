import clsx from 'clsx'
import type { ComponentProps } from 'react'

export const TextArea = ({ ...props }: ComponentProps<'textarea'>) => {
  return (
    <textarea
      {...props}
      className={clsx(
        'border-gray3 placeholder:text-gray4 font-pretendard resize-none rounded-[10px] border p-[15px] text-[14px] text-black outline-0 md:text-[16px]',
        props.className,
        props.readOnly && 'bg-gray3',
      )}
    />
  )
}
