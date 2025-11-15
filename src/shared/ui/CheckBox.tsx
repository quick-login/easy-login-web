import type { ComponentProps } from 'react'

type CheckBoxProps = {
  title: string
} & ComponentProps<'input'>

export const CheckBox = ({ title, ...props }: CheckBoxProps) => {
  return (
    <label
      htmlFor={props.name}
      className="text-gray5 font-pretendard flex cursor-pointer gap-[8px] text-[14px] font-bold"
    >
      <input {...props} id={props.name} type="checkbox" />
      {title}
    </label>
  )
}
