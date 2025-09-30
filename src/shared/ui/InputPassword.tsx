import Image from 'next/image'

type InputPasswordProps = {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  place: string
  isHide: boolean
  onToggle: () => void
}

export const InputPassword = ({ name, value, onChange, place, isHide, onToggle }: InputPasswordProps) => {
  return (
    <div className="border-gray3 flex rounded-[10px] border p-[15px]">
      <input
        type={isHide ? 'password' : 'text'}
        name={name}
        className={`placeholder:text-gray4 font-pretendard flex-1 text-[16px] text-black outline-0`}
        value={value}
        onChange={onChange}
        placeholder={place}
      />
      {isHide ? (
        <Image src="/show.svg" alt="show" width={24} height={24} className="cursor-pointer" onClick={onToggle} />
      ) : (
        <Image src="/hide.svg" alt="hide" width={24} height={24} className="cursor-pointer" onClick={onToggle} />
      )}
    </div>
  )
}
