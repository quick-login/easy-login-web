import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Text } from '@/src/shared/ui'

type SideCashProps = {
  sideOn: boolean
  cash: number
}

export const SideCash = ({ sideOn, cash }: SideCashProps) => {
  return (
    <div className="flex flex-col gap-[10px] px-[20px] py-[10px]">
      <div className="flex flex-col gap-[12px]">
        <div className="flex justify-between">
          <div className="flex gap-[4px]">
            <Image src="/cash.svg" alt="cash" width={24} height={24} />
            <Text
              className={clsx(
                'text-gray4 overflow-hidden leading-[150%] font-medium whitespace-nowrap transition-all duration-300',
                sideOn ? 'max-w-[100%]' : 'max-w-[0px]',
              )}
            >
              보유 캐시
            </Text>
          </div>
          <Text
            className={clsx(
              'overflow-hidden leading-[150%] font-medium whitespace-nowrap transition-all duration-300',
              sideOn ? 'max-w-[100%]' : 'max-w-[0px]',
            )}
          >
            {cash}
          </Text>
        </div>
        <div
          className={clsx(
            'flex gap-[10px] overflow-hidden whitespace-nowrap transition-all duration-300',
            sideOn ? 'max-h-[100%]' : 'max-h-[0px]',
          )}
        >
          <Link
            className="font-pretendard text-gray4 border-gray3 flex h-[50px] flex-1 items-center justify-center rounded-[10px] border bg-white px-[15px] py-[10px] text-[16px]"
            href={'/cash/request'}
          >
            캐시 충전
          </Link>
          <Link
            className="font-pretendard text-gray4 border-gray3 flex h-[50px] flex-1 items-center justify-center rounded-[10px] border bg-white px-[15px] py-[10px] text-[16px]"
            href={'/cash/list'}
          >
            내역 조회
          </Link>
        </div>
      </div>
    </div>
  )
}
