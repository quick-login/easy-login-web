import { Text } from '@/shared/ui'
import type { Cash } from '../model/type'

type Props = {
  onCancle: (cashChargeLogId: number) => void
} & Cash

export const CashItem = ({ cashChargeLogId, chargeCash, requestDate, status, onCancle }: Props) => {
  return (
    <tr className="group border-gray3 relative flex flex-wrap items-center justify-between gap-[10px] rounded-[10px] border px-[15px] py-[10px]">
      <td className="order-1 w-[50px] shrink-0" align="center">
        <Text className="bg-gray2 rounded-[5px] p-[5px] text-[10px] font-semibold text-black">
          {status === 'REQUEST'
            ? '승인 대기'
            : status === 'REJECTED'
              ? '승인 거절'
              : status === 'CANCELED'
                ? '신청 취소'
                : '승인 완료'}
        </Text>
      </td>
      <td className="order-3 w-full overflow-hidden md:order-2 md:w-auto md:flex-1">
        <Text className="truncate font-semibold text-black">{chargeCash.toLocaleString()} 원</Text>
      </td>
      <td className="order-2 min-w-[130px] flex-shrink-0 text-right md:order-3">
        <Text className="text-gray5 text-[13px] font-semibold">{requestDate}</Text>
      </td>
      {status === 'REQUEST' && (
        <td
          className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-[10px] bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          onClick={() => onCancle(cashChargeLogId)}
        >
          <Text className="text-center text-[13px] text-white">캐시 충전 취소하기</Text>
        </td>
      )}
    </tr>
  )
}
