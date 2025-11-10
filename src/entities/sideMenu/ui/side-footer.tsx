import clsx from 'clsx'
import Image from 'next/image'
import { LinkText, Text } from '@/shared/ui'

type SideFooterProps = {
  mobile: boolean
  isLogin: boolean
  sideOn: boolean
  name?: string
}

export const SideFooter = ({ mobile, sideOn, isLogin, name = '' }: SideFooterProps) => {
  return (
    <div className="z-25 flex h-[66px] justify-between p-[20px]">
      {isLogin ? (
        <>
          <div
            className={clsx(
              'flex gap-[4px] overflow-hidden whitespace-nowrap transition-all duration-300',
              sideOn ? '1060:max-w-[100%]' : '1060:max-w-[0px]',
              mobile ? 'max-w-[100%]' : '1060:max-w-[0px]',
            )}
          >
            <Image src="/user.svg" alt="user" width={24} height={24} />
            <Text className="text-gray4">
              <b className="font-semibold text-black">{name}</b> 님 환영해요
            </Text>
          </div>
          <LinkText href="/profile">
            <Image src="/settings.svg" alt="settings" width={24} height={24} />
          </LinkText>
        </>
      ) : (
        <>
          <Image
            src="/user.svg"
            alt="user"
            width={24}
            height={24}
            className={clsx(
              'transition-all duration-300',
              !sideOn ? '1060:max-w-[100%]' : '1060:max-w-[0px]',
              !mobile ? 'max-w-[100%]' : '1060:max-w-[0px]',
            )}
          />
          <div
            className={clsx(
              'flex w-full items-center justify-center gap-[10px] overflow-hidden whitespace-nowrap transition-all duration-300',
              sideOn ? '1060:max-w-[100%]' : '1060:max-w-[0px]',
              mobile ? 'max-w-[100%]' : '1060:max-w-[0px]',
            )}
          >
            <LinkText className="text-gray4 w-[110px] cursor-pointer text-center text-[16px] font-medium" href="/login">
              로그인
            </LinkText>
            <div className="border-gray2 h-[20px] border" />
            <LinkText
              className="text-gray4 w-[110px] cursor-pointer text-center text-[16px] font-medium"
              href="/register"
            >
              회원가입
            </LinkText>
          </div>
        </>
      )}
    </div>
  )
}
