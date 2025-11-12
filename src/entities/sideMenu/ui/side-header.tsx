import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Text } from '@/shared/ui'

type SideHeaderProps = {
  mobile: boolean
  sideOn: boolean
  setMobile: (isMobile: boolean) => void
  onToggleSide: () => void
}

export const SideHeader = ({ mobile, sideOn, setMobile, onToggleSide }: SideHeaderProps) => {
  return (
    <div className="1060:pt-[20px] flex w-full justify-between p-[20px] pt-0">
      <Link
        className={clsx(
          'flex items-center gap-[4px] overflow-hidden whitespace-nowrap transition-all duration-300',
          sideOn ? '1060:max-w-[100%]' : '1060:max-w-[0px]',
          mobile ? 'max-w-[100%]' : '1060:max-w-[0px]',
        )}
        href={'/'}
      >
        <Image src="/easyLogin.svg" alt="easyLogin" width={24} height={24} />
        <Text className="text-[16px] font-semibold">이지로그인</Text>
      </Link>
      <Image
        className="1060:block hidden cursor-pointer"
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}
        onClick={onToggleSide}
      />
      <Image
        className="1060:hidden cursor-pointer"
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}
        onClick={() => setMobile(false)}
      />
    </div>
  )
}
