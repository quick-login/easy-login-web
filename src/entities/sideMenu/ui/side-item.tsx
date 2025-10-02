import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Text } from '@/src/shared/ui'

type SideItemProps = {
  sideOn: boolean
}

export const SideItem = ({ sideOn }: SideItemProps) => {
  const [menuOn, setMenuOn] = useState<boolean>(false)

  useEffect(() => {
    const onToggleMenu = () => {
      if (!sideOn) setMenuOn(false)
    }
    onToggleMenu()
  }, [sideOn])

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex w-full cursor-pointer justify-between" onClick={() => setMenuOn(prev => !prev)}>
        <div className="flex items-center gap-[4px]">
          <Image src="/menu_li.svg" alt="menu_li" width={24} height={24} />
          <Text
            className={clsx(
              'overflow-hidden text-[16px] font-semibold whitespace-nowrap transition-all duration-300',
              sideOn ? 'max-w-[100%]' : 'max-w-[0px]',
            )}
          >
            카카오 간편로그인
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
        <div className="flex items-center gap-[6px]">
          <Text className={`text-gray4 cursor-pointer text-[16px] font-normal`}>내 앱 관리</Text>
          <div className="h-[6px] w-[6px] rounded-2xl bg-black"></div>
        </div>
        <Text className="text-gray4 cursor-pointer text-[16px] font-normal">신규 앱 등록</Text>
      </div>
    </div>
  )
}
