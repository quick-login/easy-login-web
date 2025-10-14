import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SideListMenu } from './side-list-Item'
import { Text } from '@/src/shared/ui'

type SideBasicProps = {
  sideOn: boolean
}

export const SideBasic = ({ sideOn }: SideBasicProps) => {
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
              sideOn ? 'max-w-[100%]' : 'max-w-[0px]',
            )}
          >
            판매상품
          </Text>
        </div>
        <div
          className={clsx(
            'flex cursor-pointer items-center gap-[6px] overflow-hidden whitespace-nowrap transition-all duration-300',
            sideOn ? 'max-h-[100%]' : 'max-h-[0px]',
          )}
        >
          <SideListMenu itemName="상품 둘러보기" link="/item" />
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="flex w-full cursor-pointer justify-between" onClick={() => setMenuOn(prev => !prev)}>
          <div className="flex items-center gap-[4px]">
            <Image src="/info.svg" alt="info" width={24} height={24} />
            <Text
              className={clsx(
                'overflow-hidden text-[16px] font-semibold whitespace-nowrap transition-all duration-300',
                sideOn ? 'max-w-[100%]' : 'max-w-[0px]',
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
              sideOn ? 'max-w-[100%]' : 'max-w-[0px]',
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
          <SideListMenu itemName="공지사항" link="/notice?page=1" />
        </div>
      </div>
    </>
  )
}
