import Image from 'next/image'
import { Text } from '@/src/shared/ui'

type SocialBtnProps = {
  img: string
  title: string
  onLink: () => void
}

export const SocialBtn = ({ img, title, onLink }: SocialBtnProps) => {
  return (
    <div
      className="border-gray3 flex flex-1 cursor-pointer justify-center gap-[10px] rounded-[15px] border p-[20px]"
      onClick={onLink}
    >
      <div className="flex items-center gap-[10px]">
        <Image src={img} alt={title} width={32} height={32} />
        <Text className="text-gray5 text-[16px] font-medium">{title}</Text>
      </div>
    </div>
  )
}
