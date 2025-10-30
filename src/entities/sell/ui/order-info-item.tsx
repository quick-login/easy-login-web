import { Text } from '@/src/shared/ui'

export const OrderInfoItem = () => {
  return (
    <li className="border-gray3 flex flex-col gap-[10px] rounded-[10px] border px-[15px] py-[10px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <Text className="text-[15px] font-semibold text-black">{`API 호출 횟수 추가`}</Text>
        </div>
        <div className="flex gap-[10px]">
          <div className="flex items-center justify-between gap-[20px]">
            <Text className="text-negative text-[13px] font-semibold">{`${20} %`}</Text>
            <div className="flex items-center gap-[10px]">
              <Text className="text-gray5 text-[10px] font-semibold line-through">{`${10000}원`}</Text>
              <Text className="text-[13px] font-semibold text-black">{`${8000}원`}</Text>
              <Text className="text-[13px] font-semibold text-black">{`${2} 개`}</Text>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[10px] text-[10px] font-semibold">
        <Text className="text-gray5 before:pr-[5px] before:content-['└']">API 호출 회수 증가</Text>
        <Text className="text-gray5">{`총 ${200}개`}</Text>
      </div>
    </li>
  )
}
