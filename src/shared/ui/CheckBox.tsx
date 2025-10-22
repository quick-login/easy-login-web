import clsx from 'clsx'
import type { ComponentProps } from 'react'

type TextAreaProps = {
  title: string
  labelClassName?: string
} & ComponentProps<'input'>

export const CheckBox = ({ labelClassName, title, ...props }: TextAreaProps) => {
  return (
    <label
      htmlFor={props.name}
      className={clsx('text-gray5 flex cursor-pointer gap-[8px] text-[14px] font-bold', labelClassName)}
    >
      <input
        {...props}
        type="checkbox"
        className={clsx(
          'border-gray3 placeholder:text-gray4 font-pretendard rounded-[10px] border p-[15px] text-[16px] text-black outline-0',
          props.className,
        )}
      />
      {title}
    </label>
  )
}
