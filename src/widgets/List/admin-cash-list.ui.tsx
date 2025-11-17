'use client'

import { Pagination } from './pagination.ui'
import { LoadingSkeleton } from './skeleton-list.ui'
import { AdminCashItem, useAdminCashList } from '@/entities/cash'
import { useReqCash } from '@/features/request-cash'
import { useConfirmStore } from '@/shared/store'
import { Text } from '@/shared/ui'

export const AdminCashList = () => {
  const { cashList, pagination, isLoading } = useAdminCashList()
  const { handleAdminApproveCash, handleAdminRejectCash } = useReqCash()
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)

  if (isLoading) return <LoadingSkeleton />

  return cashList.length === 0 ? (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <Text className="text-gray5 text-[14px] font-semibold md:text-[16px]">캐시 충전 내역이 존재하지 않습니다.</Text>
    </div>
  ) : (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <Text className="text-[12px] font-semibold text-black md:text-[16px]">접수된 캐시 내역입니다.</Text>
      <table className="flex-1">
        <tbody className="flex flex-1 flex-col gap-[10px]">
          {cashList.map(data => (
            <AdminCashItem
              key={data.cashChargeLogId}
              cashChargeLogId={data.cashChargeLogId}
              chargeCash={data.chargeCash}
              name={data.name}
              requestDate={data.requestDate}
              status={data.status}
              onCancle={() =>
                onOpenConfirm('신청을 거절하시겠습니까?', () => handleAdminRejectCash(data.cashChargeLogId))
              }
              onApprove={() =>
                onOpenConfirm('신청을 승인하시겠습니까?', () => handleAdminApproveCash(data.cashChargeLogId))
              }
            />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={pagination.currentPage}
        totalElements={pagination.totalElements}
        pageSize={pagination.pageSize}
        totalPages={pagination.totalPages}
      />
    </div>
  )
}
