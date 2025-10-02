import Image from 'next/image'
import { Text } from '@/src/shared/ui'
import type { ReactNode } from 'react'

type MainBannerProps = {
  img: string
  title: string
  children: ReactNode
}

export const MainBanner = ({ img, title, children }: MainBannerProps) => {
  return (
    <div className="border-gray3 flex flex-1 flex-col items-center gap-[10px] rounded-[15px] border p-[20px]">
      <Image src={img} alt={title} width={253} height={253} />
      <div className="flex flex-col items-center gap-[10px]">
        <Text className="text-[20px] font-bold text-black">{title}</Text>
        <Text className="text-gray4 text-center font-normal">{children}</Text>
      </div>
    </div>
  )
}
