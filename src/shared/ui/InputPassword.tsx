import Image from 'next/image'
import { useTogglePassword } from '../lib/useTogglePassword'
import type { ComponentProps } from 'react'

export const InputPassword = ({ ...props }: ComponentProps<'input'>) => {
  const { hide, onToggleHide } = useTogglePassword()
  return (
    <div className="border-gray3 flex gap-[10px] rounded-[10px] border p-[15px]">
      <input
        type={hide ? 'password' : 'text'}
        className={`placeholder:text-gray4 font-pretendard min-w-0 flex-1 text-[16px] text-black outline-0`}
        {...props}
      />
      {hide ? (
        <Image src="/show.svg" alt="show" width={24} height={24} className="cursor-pointer" onClick={onToggleHide} />
      ) : (
        <Image src="/hide.svg" alt="hide" width={24} height={24} className="cursor-pointer" onClick={onToggleHide} />
      )}
    </div>
  )
}
