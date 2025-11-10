import { Button, Text } from '@/shared/ui'
import type { Cash } from '../model/type'

type Props = {
  onApprove: (cashChargeLogId: number) => void
  onCancle: (cashChargeLogId: number) => void
} & Cash

export const AdminCashItem = ({
  cashChargeLogId,
  chargeCash,
  memberId,
  name,
  requestDate,
  status,
  onApprove,
  onCancle,
}: Props) => {
  return (
    <div className="border-gray3 flex items-center justify-between rounded-[10px] border px-[15px] py-[10px]">
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
        <Text className="font-semibold text-black">{`${chargeCash.toLocaleString()} 원 (${name})`}</Text>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="flex gap-[5px]">
          <Button className="!h-fit px-[10px] py-[5px]" onClick={() => onApprove(cashChargeLogId)}>
            승인
          </Button>
          <Button className="!h-fit px-[10px] py-[5px]" variant="cancle" onClick={() => onCancle(cashChargeLogId)}>
            거절
          </Button>
        </div>
        <Text className="text-gray5 text-[13px] font-semibold">{requestDate}</Text>
      </div>
    </div>
  )
}
