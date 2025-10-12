import clsx from 'clsx'

type TextAreaProps = {
  name: string
  className?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  place: string
  read?: boolean
}

export const TextArea = ({ className, name, value, onChange, place, read = false }: TextAreaProps) => {
  return (
    <textarea
      name={name}
      className={clsx(
        'border-gray3 placeholder:text-gray4 font-pretendard resize-none rounded-[10px] border p-[15px] text-[16px] text-black outline-0',
        className,
        read && 'bg-gray3',
      )}
      value={value}
      onChange={onChange}
      placeholder={place}
      readOnly={read}
    />
  )
}
