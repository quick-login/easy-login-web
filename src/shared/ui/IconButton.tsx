import clsx from 'clsx'
import Image from 'next/image'
import { Text } from './Text'

type IconButtonProps = {
  title: string
  alt: string
  className?: string
  onClick: () => void
}

export const IconButton = ({ alt, onClick, title, className }: IconButtonProps) => {
  return (
    <div
      className={clsx('text-negative flex cursor-pointer items-center justify-center gap-[4px] text-[16px]', className)}
      onClick={onClick}
    >
      <Image src="/trash.svg" alt={alt} width={24} height={24} className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]" />
      <Text className="text-negative text-[14px] md:text-[16px]">{title}</Text>
    </div>
  )
}
