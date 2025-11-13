import clsx from 'clsx'
import Image from 'next/image'
import { useTogglePassword } from '../lib/useTogglePassword'
import type { ComponentProps } from 'react'

export const InputPassword = ({ ...props }: ComponentProps<'input'>) => {
  const { hide, onToggleHide } = useTogglePassword()
  return (
    <div className="border-gray3 flex gap-[10px] rounded-[10px] border p-[15px]">
      <input
        {...props}
        type={hide ? 'password' : 'text'}
        className={clsx(
          `placeholder:text-gray4 font-pretendard min-w-0 flex-1 text-[14px] text-black outline-0 md:text-[16px]`,
          props.className,
        )}
      />
      {hide ? (
        <Image src="/show.svg" alt="show" width={24} height={24} className="cursor-pointer" onClick={onToggleHide} />
      ) : (
        <Image src="/hide.svg" alt="hide" width={24} height={24} className="cursor-pointer" onClick={onToggleHide} />
      )}
    </div>
  )
}
