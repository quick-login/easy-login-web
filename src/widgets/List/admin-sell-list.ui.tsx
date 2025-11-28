'use client'

import { LoadingSkeletonCard } from './skeleton-card.ui'
import { AdminSellPopup } from '../popup/admin-sell-popup'
import { AdminSellItemCard, useAdminSellInfinite } from '@/entities/sell'
import { useAdminSell } from '@/features/order-sell'
import { useConfirmStore, useItemStore, useModalStore } from '@/shared/store'
import { Button, Text } from '@/shared/ui'

export const AdminSellList = () => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useAdminSellInfinite()
  const sellList = useItemStore(state => state.adminSellList)
  const { handleChangeStatus, handleDeleteSell } = useAdminSell()
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  const isAdminSell = useModalStore(state => state.isAdminSell)

  return !isLoading && sellList.length === 0 ? (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <Text className="text-gray5 text-[14px] font-semibold md:text-[16px]">상품이 존재하지 않습니다.</Text>
    </div>
  ) : (
    <>
      <div className="flex flex-1 flex-col overflow-x-auto p-[20px]">
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
              onStatus={() => handleChangeStatus(sell.productId)}
            />
          ))}
          {(isLoading || isFetchingNextPage) && <LoadingSkeletonCard />}
        </div>
        {!isLoading && !isFetchingNextPage && (
          <Button className="w-full p-[15px]" variant={hasNextPage ? 'cancle' : 'noActive'} onClick={fetchNextPage}>
            {hasNextPage ? '더보기' : '상품을 모두 불러왔습니다'}
          </Button>
        )}
      </div>
      {isAdminSell && <AdminSellPopup />}
    </>
  )
}
