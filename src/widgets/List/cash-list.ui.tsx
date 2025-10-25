import { Pagination } from './pagination.ui'
import { CashItem } from '@/src/entities/cash'
import { useCashList } from '@/src/entities/cash/model/useCashList'

export const CashList = () => {
  const { cashList, pagination } = useCashList()
  return (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <div className="flex flex-col gap-[10px]">
        {cashList.map(data => (
          <CashItem
            key={data.cashChargeLogId}
            cashChargeLogId={data.cashChargeLogId}
            chargeCash={data.chargeCash}
            requestDate={data.requestDate}
            status={data.status}
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
