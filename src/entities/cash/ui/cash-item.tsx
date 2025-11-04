import { Text } from '@/shared/ui'
import type { Cash } from '../model/type'

type Props = {
  onCancle: (cashChargeLogId: number) => void
} & Cash

export const CashItem = ({ cashChargeLogId, chargeCash, requestDate, status, onCancle }: Props) => {
  return (
    <div className="group border-gray3 relative flex items-center justify-between rounded-[10px] border px-[15px] py-[10px]">
      <div className="flex items-center gap-[10px]">
        <Text className="bg-gray2 rounded-[5px] p-[5px] text-[10px] font-semibold text-black">
          {status === 'REQUEST'
            ? '승인 대기'
            : status === 'REJECTED'
              ? '승인 거절'
              : status === 'CANCELED'
                ? '신청 취소'
                : '승인 완료'}
        </Text>
        <Text className="font-semibold text-black">{chargeCash.toLocaleString()} 원</Text>
      </div>
      <Text className="text-gray5 text-[13px] font-semibold">{requestDate}</Text>
      {status === 'REQUEST' && (
        <div
          className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-[10px] bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          onClick={() => onCancle(cashChargeLogId)}
        >
          <Text className="text-center text-[13px] text-white">캐시 충전 취소하기</Text>
        </div>
      )}
    </div>
  )
}
