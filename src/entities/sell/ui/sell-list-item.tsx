import { Button, Input, Text } from '@/src/shared/ui'

export const SellListItem = () => {
  return (
    <li className="border-gray3 flex items-center justify-between rounded-[10px] border px-[15px] py-[5px]">
      <div className="flex items-center gap-[10px]">
        <Text className="text-[15px] font-semibold text-black">{`API 호출 횟수 추가`}</Text>
      </div>
      <div className="flex gap-[10px]">
        <div className="flex items-center justify-between gap-[20px]">
          <Text className="text-negative text-[13px] font-semibold">{`${20} %`}</Text>
          <div className="flex items-center gap-[10px]">
            <Text className="text-gray5 text-[10px] font-semibold line-through">{`${10000}원`}</Text>
            <Text className="text-[13px] font-semibold text-black">{`${8000}원`}</Text>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <Button className="!h-[25px] w-[25px]">-</Button>
          <Input className="w-[50px] !p-[5px] text-center" type="text" name="orderQuantity" defaultValue={1} />
          <Button className="!h-[25px] w-[25px]">+</Button>
        </div>
      </div>
    </li>
  )
}
