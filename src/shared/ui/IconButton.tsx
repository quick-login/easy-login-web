import Image from 'next/image'
import { Text } from './Text'

type IconButtonProps = {
  title: string
  alt: string
  onClick: () => void
}

export const IconButton = ({ alt, onClick, title }: IconButtonProps) => {
  return (
    <div
      className="text-negative flex cursor-pointer items-center justify-center gap-[4px] text-[16px]"
      onClick={onClick}
    >
      <Image src="/trash.svg" alt={alt} width={24} height={24} />
      <Text className="text-negative">{title}</Text>
    </div>
  )
}
