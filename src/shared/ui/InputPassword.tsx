import Image from 'next/image'
import { TogglePassword } from '../lib/toggle-password'

type InputPasswordProps = {
  name: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  place: string
}

export const InputPassword = ({ name, value, onChange, place }: InputPasswordProps) => {
  const { hide, onToggleHide } = TogglePassword()
  return (
    <div className="border-gray3 flex gap-[10px] rounded-[10px] border p-[15px]">
      <input
        type={hide ? 'password' : 'text'}
        name={name}
        className={`placeholder:text-gray4 font-pretendard min-w-0 flex-1 text-[16px] text-black outline-0`}
        value={value}
        onChange={onChange}
        placeholder={place}
      />
      {hide ? (
        <Image src="/show.svg" alt="show" width={24} height={24} className="cursor-pointer" onClick={onToggleHide} />
      ) : (
        <Image src="/hide.svg" alt="hide" width={24} height={24} className="cursor-pointer" onClick={onToggleHide} />
      )}
    </div>
  )
}
