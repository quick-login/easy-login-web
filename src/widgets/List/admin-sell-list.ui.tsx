'use client'

import { Pagination } from './pagination.ui'
import { LoadingSkeletonCard } from './skeleton-card.ui'
import { AdminSellPopup } from '../popup/admin-sell-popup'
import { AdminSellItemCard, useAdminSellList } from '@/entities/sell'
import { useAdminSell } from '@/features/order-sell'
import { useConfirmStore, useItemStore, useModalStore } from '@/shared/store'
import { Text } from '@/shared/ui'

export const AdminSellList = () => {
  const { pagination, isLoading } = useAdminSellList()
  const { handleChangeStatus, handleDeleteSell } = useAdminSell()
  const sellList = useItemStore(state => state.adminSellList)
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  const isAdminSell = useModalStore(state => state.isAdminSell)

  if (isLoading) return <LoadingSkeletonCard />

  return sellList.length === 0 ? (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <Text className="text-gray5 text-[14px] font-semibold md:text-[16px]">상품이 존재하지 않습니다.</Text>
    </div>
  ) : (
    <>
      <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
        <div className="grid grid-cols-2 items-start gap-[10px] md:grid-cols-4">
          {sellList.map(sell => (
            <AdminSellItemCard
              key={sell.productId}
              discountRate={sell.discountRate}
              finalPrice={sell.finalPrice}
              price={sell.price}
              name={sell.name}
              productId={sell.productId}
              status={sell.status}
              type={sell.type}
              typeDescription={sell.typeDescription}
              value={sell.value}
              onRemove={() => onOpenConfirm('상품을 삭제하시겠습니까?', () => handleDeleteSell(sell.productId))}
              onStatus={() => onOpenConfirm('상품 상태를 변경하시겠습니까?', () => handleChangeStatus(sell.productId))}
            />
          ))}
        </div>
      </div>

      <div className="py-[10px]">
        <Pagination
          currentPage={pagination.currentPage}
          totalElements={pagination.totalElements}
          pageSize={8}
          totalPages={pagination.totalPages}
        />
      </div>
      {isAdminSell && <AdminSellPopup />}
    </>
  )
}
