import clsx from 'clsx'
import Image from 'next/image'
import { LinkText, Text } from '@/src/shared/ui'

type SideCashProps = {
  mobile: boolean
  sideOn: boolean
  cash: number
}

export const SideCash = ({ mobile, sideOn, cash }: SideCashProps) => {
  return (
    <div className="flex flex-col gap-[10px] px-[20px] py-[10px]">
      <div className="flex flex-col gap-[12px]">
        <div className="flex justify-between">
          <div className="flex gap-[4px]">
            <Image src="/cash.svg" alt="cash" width={24} height={24} />
            <Text
              className={clsx(
                'overflow-hidden leading-[150%] font-semibold whitespace-nowrap transition-all duration-300',
                sideOn ? '1060:max-w-[100%]' : '1060:max-w-[0px]',
                mobile ? 'max-w-[100%]' : '1060:max-w-[0px]',
              )}
            >
              보유 캐시
            </Text>
          </div>
          <Text
            className={clsx(
              'overflow-hidden leading-[150%] font-medium whitespace-nowrap transition-all duration-300',
              sideOn ? '1060:max-w-[100%]' : '1060:max-w-[0px]',
              mobile ? 'max-w-[100%]' : '1060:max-w-[0px]',
            )}
          >
            {Number(cash).toLocaleString()}
          </Text>
        </div>
        <div
          className={clsx(
            'flex gap-[10px] overflow-hidden whitespace-nowrap transition-all duration-300',
            sideOn ? '1060:max-h-[100%]' : '1060:max-h-[0px]',
            mobile ? 'max-h-[100%]' : '1060:max-h-[0px]',
          )}
        >
          <LinkText
            className="border-gray3 flex h-[50px] flex-1 items-center justify-center rounded-[10px] border bg-white font-semibold"
            href={'/cash/request'}
          >
            캐시 충전
          </LinkText>
          <LinkText
            className="border-gray3 flex h-[50px] flex-1 items-center justify-center rounded-[10px] border bg-white font-semibold"
            href={'/cash/list?page=1'}
          >
            내역 조회
          </LinkText>
        </div>
      </div>
    </div>
  )
}
