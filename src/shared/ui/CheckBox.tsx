import clsx from 'clsx'

type TextAreaProps = {
  name: string
  className?: string
  value?: string
  title: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  labelClassName?: string
}

export const CheckBox = ({ className, name, value, onChange, labelClassName, title }: TextAreaProps) => {
  return (
    <label
      htmlFor={name}
      className={clsx('text-gray5 flex cursor-pointer gap-[8px] text-[14px] font-bold', labelClassName)}
    >
      <input
        id={name}
        type="checkbox"
        name={name}
        className={clsx(
          'border-gray3 placeholder:text-gray4 font-pretendard rounded-[10px] border p-[15px] text-[16px] text-black outline-0',
          className,
        )}
        value={value}
        onChange={onChange}
      />
      {title}
    </label>
  )
}
