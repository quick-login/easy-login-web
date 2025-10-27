'use client'

import { Pagination } from './pagination.ui'
import { CashItem } from '@/src/entities/cash'
import { useCashList } from '@/src/entities/cash/model/useCashList'
import { useReqCash } from '@/src/features/request-cash/model/useReqCash'
import { useConfirmStore } from '@/src/shared/store/useConfirmStore'
import { Text } from '@/src/shared/ui'

export const CashList = () => {
  const { cashList, pagination } = useCashList()
  const { handleCancleCash } = useReqCash()
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  return cashList.length === 0 ? (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <Text className="font-semibold">캐시 충전 내역이 존재하지 않습니다.</Text>
    </div>
  ) : (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <div className="flex flex-1 flex-col gap-[10px]">
        {cashList.map(data => (
          <CashItem
            key={data.cashChargeLogId}
            cashChargeLogId={data.cashChargeLogId}
            chargeCash={data.chargeCash}
            requestDate={data.requestDate}
            status={data.status}
            onCancle={() => onOpenConfirm('신청을 취소하시겠습니까?', () => handleCancleCash(data.cashChargeLogId))}
          />
        ))}
      </div>
      <Pagination
        currentPage={pagination.currentPage}
        totalElements={pagination.totalElements}
        pageSize={pagination.pageSize}
        totalPages={pagination.totalPages}
      />
    </div>
  )
}
