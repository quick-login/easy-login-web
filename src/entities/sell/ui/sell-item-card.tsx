import Image from 'next/image'
import { Button, Text } from '@/src/shared/ui'

export const SellItemCard = () => {
  return (
    <article className="border-gray3 mb-[30px] flex flex-col rounded-[10px] border">
      <figure className="flex items-center justify-center overflow-hidden p-[20px]">
        <Image src={'/easyLogin.svg'} alt="상품" width={200} height={200} />
      </figure>

      <div className="border-t-gray3 flex flex-col justify-end gap-[10px] border-t p-[10px]">
        <Text className="text-[15px] font-semibold">{`API 호출 횟수 추가`}</Text>
        <div className="flex justify-between">
          <Text className="text-negative text-[14px] font-medium">{`${20}%`}</Text>
          <div className="flex items-center justify-center gap-[5px]">
            <Text className="text-gray4 text-[10px] font-bold line-through">{`${(10000).toLocaleString()} 원`}</Text>
            <Text className="text-[14px] font-bold">{`${(8000).toLocaleString()} 원`}</Text>
          </div>
        </div>
      </div>
      <Button className="rounded-none rounded-b-[10px]">상품 담기</Button>
    </article>
  )
}
