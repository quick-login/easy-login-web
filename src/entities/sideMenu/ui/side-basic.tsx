import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SideListMenu } from './side-list-Item'
import { Text } from '@/src/shared/ui'

type SideBasicProps = {
  mobile: boolean
  sideOn: boolean
  role: string | undefined
}

export const SideBasic = ({ role = 'USER', mobile, sideOn }: SideBasicProps) => {
  const [menuOn, setMenuOn] = useState<boolean>(false)

  // console.log('사이드 param', path)

  useEffect(() => {
    if (!sideOn) setMenuOn(false)
    // console.log('useEffect')
  }, [sideOn])

  return (
    <>
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center gap-[4px]">
          <Image src="/shop.svg" alt="shop" width={24} height={24} />
          <Text
            className={clsx(
              'overflow-hidden text-[16px] font-semibold whitespace-nowrap transition-all duration-300',
              sideOn ? '1060:max-w-[100%]' : '1060:max-w-[0px]',
              mobile ? 'max-w-[100%]' : '1060:max-w-[0px]',
            )}
          >
            판매상품
          </Text>
        </div>
        <div
          className={clsx(
            'flex cursor-pointer flex-col gap-[6px] overflow-hidden whitespace-nowrap transition-all duration-300',
            sideOn ? '1060:max-h-[100%]' : '1060:max-h-[0px]',
            mobile ? 'max-h-[100%]' : 'max-h-[0px]',
          )}
        >
          <SideListMenu itemName="상품 둘러보기" link="/sell?page=1" />
          {role === 'ADMIN' && <SideListMenu itemName="상품 관리" link="/admin/sell?page=1" />}
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="flex w-full cursor-pointer justify-between" onClick={() => setMenuOn(prev => !prev)}>
          <div className="flex items-center gap-[4px]">
            <Image src="/info.svg" alt="info" width={24} height={24} />
            <Text
              className={clsx(
                'overflow-hidden text-[16px] font-semibold whitespace-nowrap transition-all duration-300',
                sideOn ? '1060:max-w-[100%]' : '1060:max-w-[0px]',
                mobile ? 'max-w-[100%]' : '1060:max-w-[0px]',
              )}
            >
              이지로그인
            </Text>
          </div>
          <Image
            src="/down.svg"
            alt="down"
            width={24}
            height={24}
            className={clsx(
              'transition-all duration-300',
              menuOn ? 'rotate-180' : 'rotate-0',
              sideOn ? '1060:max-w-[100%]' : '1060:max-w-[0px]',
              mobile ? 'max-w-[100%]' : '1060:max-w-[0px]',
            )}
          />
        </div>
        <div
          className={clsx(
            'flex flex-col gap-[10px] overflow-hidden whitespace-nowrap transition-all duration-300',
            menuOn ? 'max-h-[100%]' : 'max-h-[0px]',
          )}
        >
          <SideListMenu itemName="제품 소개" link="/" />
          <SideListMenu itemName="이용 가이드" link="/guide" />
          <SideListMenu itemName="개발자 가이드" link="/develop" />
          <SideListMenu itemName="공지사항" link="/notice" />
          {role === 'ADMIN' && <SideListMenu itemName="문의내역 관리" link="/admin/question?page=1&STATUS=WAITING" />}
          {role === 'ADMIN' && <SideListMenu itemName="캐시신청 관리" link="/admin/cash?page=1" />}
        </div>
      </div>
    </>
  )
}
