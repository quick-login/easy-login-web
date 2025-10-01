type InputProps = {
  name: string
  className?: string
  value: string
  type: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  place: string
}

export const Input = ({ className, name, value, type, onChange, place }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      className={`border-gray3 placeholder:text-gray4 font-pretendard rounded-[10px] border p-[15px] text-[16px] text-black outline-0 ${className ?? ''}`}
      value={value}
      onChange={onChange}
      placeholder={place}
    />
  )
}
