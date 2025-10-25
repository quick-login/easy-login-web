import { Text } from '@/src/shared/ui'
import type { Cash } from '../model/type'

export const CashItem = ({ cashChargeLogId, chargeCash, requestDate, status }: Cash) => {
  return (
    // <div className="border-gray3 flex items-center justify-between rounded-[10px] border px-[15px] py-[10px]">
    //   <div className="flex items-center gap-[10px]">
    //     <Text className="bg-gray2 rounded-[5px] p-[5px] text-[10px] font-semibold text-black">승인 완료</Text>
    //     <Text className="font-semibold text-black">20000</Text>
    //   </div>
    //   <Text className="text-gray5 text-[13px] font-semibold">25.09.25 23:59</Text>
    // </div>
    <div className="border-gray3 flex items-center justify-between rounded-[10px] border px-[15px] py-[10px]">
      <div className="flex items-center gap-[10px]">
        <Text className="bg-gray2 rounded-[5px] p-[5px] text-[10px] font-semibold text-black">
          {status === 'REQUEST' ? '승인 대기' : status === 'REJECTED' ? '승인 거절' : '승인 완료'}
        </Text>
        <Text className="font-semibold text-black">{Number(chargeCash)}</Text>
      </div>
      <Text className="text-gray5 text-[13px] font-semibold">{requestDate}</Text>
    </div>
  )
}
