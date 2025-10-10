import clsx from 'clsx'
import Image from 'next/image'
import { Button, Text } from '@/src/shared/ui'

type SideCashProps = {
  sideOn: boolean
  cash: number
}

export const SideCash = ({ sideOn, cash }: SideCashProps) => {
  return (
    <div className="flex flex-col gap-[10px] p-[20px]">
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
          <Button className="flex-1 gap-[10px] px-[15px] py-[10px]" variant="cancle" onClick={() => {}}>
            캐시 충전
          </Button>
          <Button className="flex-1 gap-[10px] px-[15px] py-[10px]" variant="cancle" onClick={() => {}}>
            내역 조회
          </Button>
        </div>
      </div>
    </div>
  )
}
