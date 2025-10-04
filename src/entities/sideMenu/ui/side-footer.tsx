import clsx from 'clsx'
import Image from 'next/image'
import { LinkText } from '@/src/shared/ui'

type SideFooterProps = {
  sideOn: boolean
}

export const SideFooter = ({ sideOn }: SideFooterProps) => {
  return (
    <div className="flex h-[66px] p-[20px]">
      <Image
        src="/user.svg"
        alt="user"
        width={24}
        height={24}
        className={clsx('transition-all duration-300', !sideOn ? 'max-w-[100%]' : 'max-w-[0px]')}
      />
      <div
        className={clsx(
          'flex w-full items-center justify-center gap-[10px] overflow-hidden whitespace-nowrap transition-all duration-300',
          sideOn ? 'max-w-[100%]' : 'max-w-[0px]',
        )}
      >
        <LinkText className="text-gray4 w-[110px] cursor-pointer text-center text-[16px] font-medium" link="/login">
          로그인
        </LinkText>
        <div className="border-gray2 h-[20px] border" />
        <LinkText className="text-gray4 w-[110px] cursor-pointer text-center text-[16px] font-medium" link="/register">
          회원가입
        </LinkText>
      </div>
    </div>
  )
}
