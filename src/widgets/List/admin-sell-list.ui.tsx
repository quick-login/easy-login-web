// 'use client'

// import { Pagination } from './pagination.ui'
// import { LoadingSkeletonCard } from './skeleton-card.ui'
// import { AdminSellPopup } from '../popup/admin-sell-popup'
// import { AdminSellItemCard, useAdminSellList } from '@/entities/sell'
// import { useAdminSell } from '@/features/order-sell'
// import { useConfirmStore, useItemStore, useModalStore } from '@/shared/store'
// import { Text } from '@/shared/ui'

// export const AdminSellList = () => {
//   const { pagination, isLoading } = useAdminSellList()
//   const { handleChangeStatus, handleDeleteSell } = useAdminSell()
//   const sellList = useItemStore(state => state.adminSellList)
//   const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
//   const isAdminSell = useModalStore(state => state.isAdminSell)

//   if (isLoading) return <LoadingSkeletonCard />

//   return sellList.length === 0 ? (
//     <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
//       <Text className="text-gray5 text-[14px] font-semibold md:text-[16px]">상품이 존재하지 않습니다.</Text>
//     </div>
//   ) : (
//     <>
//       <div className="scrollbar-hidden flex flex-1 flex-col overflow-x-auto border-2 p-[20px]">
//         <div className="grid grid-cols-2 items-start gap-[10px] border-2 md:grid-cols-4">
//           {sellList.map(sell => (
//             <AdminSellItemCard
//               key={sell.productId}
//               discountRate={sell.discountRate}
//               finalPrice={sell.finalPrice}
//               price={sell.price}
//               name={sell.name}
//               productId={sell.productId}
//               status={sell.status}
//               type={sell.type}
//               typeDescription={sell.typeDescription}
//               value={sell.value}
//               onRemove={() => onOpenConfirm('상품을 삭제하시겠습니까?', () => handleDeleteSell(sell.productId))}
//               onStatus={() => onOpenConfirm('상품 상태를 변경하시겠습니까?', () => handleChangeStatus(sell.productId))}
//             />
//           ))}
//         </div>
//         <div className="border-2" />
//       </div>

//       {/* <div className="border-2 py-[10px]">
//         <Pagination
//           currentPage={pagination.currentPage}
//           totalElements={pagination.totalElements}
//           pageSize={8}
//           totalPages={pagination.totalPages}
//         />
//       </div> */}
//       {isAdminSell && <AdminSellPopup />}
//     </>
//   )
// }
'use client'

import { useQueryClient } from '@tanstack/react-query'
import { useEffect, useRef } from 'react'
import { AdminSellPopup } from '../popup/admin-sell-popup'
import { AdminSellItemCard } from '@/entities/sell'
import { useAdminSellInfinite } from '@/entities/sell/model/useAdmin-Sell-Infinity'
import { useAdminSell } from '@/features/order-sell'
import { useConfirmStore, useItemStore, useModalStore } from '@/shared/store'
import { Text } from '@/shared/ui'

export const AdminSellList = () => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage } = useAdminSellInfinite()
  const sellList = useItemStore(state => state.adminSellList)
  const clearAdminSell = useItemStore(state => state.clearAdminSell)
  const { handleChangeStatus, handleDeleteSell } = useAdminSell()
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  const isAdminSell = useModalStore(state => state.isAdminSell)
  const queryClient = useQueryClient()

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current || isFetchingNextPage) return

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) fetchNextPage()
    })

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [hasNextPage, isFetchingNextPage])

  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: ['admin-sell-list'] })
      clearAdminSell()
    }
  }, [])

  return sellList.length === 0 ? (
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
              onStatus={() => onOpenConfirm('상품 상태를 변경하시겠습니까?', () => handleChangeStatus(sell.productId))}
            />
          ))}
        </div>
        <div ref={ref} className="h-[1px]" />
      </div>
      {isAdminSell && <AdminSellPopup />}
    </>
  )
}
