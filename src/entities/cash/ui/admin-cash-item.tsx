import clsx from 'clsx'
import { CashStatus } from './cash-status'
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
    <tr
      className={clsx(
        'border-gray3 flex flex-wrap items-center justify-between gap-[10px] rounded-[10px] border px-[15px] py-[10px]',
        status === 'CANCELED' && 'bg-gray1',
        status === 'REQUEST' && 'border-gray5 border-3',
      )}
    >
      <td className="order-1 w-[50px] shrink-0" align="center">
        <CashStatus status={status} />
      </td>
      <td className="order-3 w-full overflow-hidden md:order-2 md:w-auto md:flex-1">
        <Text
          className={clsx(
            'truncate font-semibold text-black',
            status === 'CANCELED' && 'text-gray4 line-through',
            status === 'REJECTED' && 'text-gray3',
          )}
        >
          {chargeCash.toLocaleString()} 원
        </Text>
      </td>
      {status === 'REQUEST' && (
        <td className="order-3 flex w-full gap-[5px] md:w-fit">
          <Button
            className="!h-fit flex-1 px-[10px] py-[5px] !text-[13px] md:flex-none"
            onClick={() => onApprove(cashChargeLogId)}
          >
            승 인
          </Button>
          <Button
            className="!h-fit flex-1 px-[10px] py-[5px] !text-[13px] md:flex-none"
            variant="cancle"
            onClick={() => onCancle(cashChargeLogId)}
          >
            거 절
          </Button>
        </td>
      )}
      <td className="order-2 min-w-[130px] shrink-0 text-right md:order-3">
        {name && <Text className="text-[11px] font-semibold text-black">{name}</Text>}
        <Text className="text-gray5 text-[11px] font-semibold">{requestDate}</Text>
      </td>
    </tr>
  )
}
