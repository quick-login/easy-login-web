import type { ComponentProps } from 'react'

type RadioBtnProps = {
  title: string
} & ComponentProps<'input'>

export const RadioBtn = ({ title, ...props }: RadioBtnProps) => {
  return (
    <label
      htmlFor={props.id}
      className="text-gray5 font-pretendard flex cursor-pointer gap-[5px] text-[13px] font-bold"
    >
      <input {...props} id={props.id} type="radio" />
      {title}
    </label>
  )
}
