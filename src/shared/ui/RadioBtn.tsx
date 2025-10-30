import type { ComponentProps } from 'react'

type RadioBtnProps = {
  title: string
} & ComponentProps<'input'>

export const RadioBtn = ({ title, ...props }: RadioBtnProps) => {
  return (
    <label
      htmlFor={props.id}
      className="text-gray5 font-pretendard flex cursor-pointer gap-[8px] text-[14px] font-bold"
    >
      <input
        {...props}
        id={props.id}
        type="radio"
        className="border-gray3 placeholder:text-gray4 font-pretendard rounded-[10px] border p-[15px] text-[16px] text-black outline-0"
      />
      {title}
    </label>
  )
}
