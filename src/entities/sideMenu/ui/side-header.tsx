import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Text } from '@/src/shared/ui'

type SideHeaderProps = {
  sideOn: boolean
  onToggleSide: () => void
}

export const SideHeader = ({ sideOn, onToggleSide }: SideHeaderProps) => {
  return (
    <div className="flex w-full justify-between p-[20px]">
      <Link
        className={clsx(
          'flex items-center gap-[4px] overflow-hidden whitespace-nowrap transition-all duration-300',
          sideOn ? 'max-w-[100%]' : 'max-w-[0px]',
        )}
        href={'/'}
      >
        <Image src="/easyLogin.svg" alt="easyLogin" width={24} height={24} />
        <Text className="text-[16px] font-semibold">이지로그인</Text>
      </Link>
      <Image className="cursor-pointer" src="/menu.svg" alt="menu" width={24} height={24} onClick={onToggleSide} />
    </div>
  )
}
