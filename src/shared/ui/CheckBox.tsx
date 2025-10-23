import type { ComponentProps } from 'react'

type TextAreaProps = {
  title: string
} & ComponentProps<'input'>

export const CheckBox = ({ title, ...props }: TextAreaProps) => {
  return (
    <label
      htmlFor={props.name}
      className="text-gray5 font-pretendard flex cursor-pointer gap-[8px] text-[14px] font-bold"
    >
      <input
        {...props}
        id={props.name}
        type="checkbox"
        className="border-gray3 placeholder:text-gray4 font-pretendard rounded-[10px] border p-[15px] text-[16px] text-black outline-0"
      />
      {title}
    </label>
  )
}
