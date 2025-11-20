import clsx from 'clsx'
import { Text } from '@/shared/ui'

export const CashStatus = ({ status }: { status: 'REQUEST' | 'REJECTED' | 'CANCELED' | 'CHARGE_COMPLETED' }) => {
  return (
    <Text
      className={clsx(
        'bg-gray2 rounded-[5px] p-[5px] text-[10px] font-semibold text-black',
        status === 'CANCELED' && 'border-gray3 text-gray4 border bg-white',
        status === 'REJECTED' && 'bg-gray1 text-gray4 border-gray3 border',
      )}
    >
      {status === 'REQUEST'
        ? '승인 대기'
        : status === 'REJECTED'
          ? '승인 거절'
          : status === 'CANCELED'
            ? '신청 취소'
            : '승인 완료'}
    </Text>
  )
}
