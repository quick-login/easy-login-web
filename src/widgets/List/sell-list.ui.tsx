'use client'

import { Pagination } from './pagination.ui'
import { SellPopup } from '../popup/sell-order-popup'
import { SellItemCard, useSellList } from '@/src/entities/sell'
import { useModalStore, useSellStore } from '@/src/shared/store'
import { Text } from '@/src/shared/ui'

export const SellList = () => {
  const { sellList, pagination } = useSellList()
  const list = useSellStore(state => state.list)
  const addList = useSellStore(state => state.addList)
  const removeList = useSellStore(state => state.removeList)
  const isUserSell = useModalStore(state => state.isUserSell)
  const setModal = useModalStore(state => state.setModal)

  return sellList.length === 0 ? (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <Text className="text-gray5 font-semibold">상품이 존재하지 않습니다.</Text>
    </div>
  ) : (
    <>
      <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
        <div className="grid grid-cols-2 gap-[10px] md:grid-cols-4">
          {sellList.map(sell => (
            <SellItemCard
              discountRate={sell.discountRate}
              finalPrice={sell.finalPrice}
              name={sell.name}
              price={sell.price}
              product_id={sell.product_id}
              key={sell.product_id}
              isStore={list.has(sell.product_id)}
              onAdd={() =>
                addList(sell.product_id, {
                  discountRate: sell.discountRate,
                  finalPrice: sell.finalPrice,
                  name: sell.name,
                  orderQuantity: 1,
                  price: sell.price,
                })
              }
              onRemove={() => removeList(sell.product_id)}
            />
          ))}
        </div>
      </div>

      <div className="py-[10px]">
        <Pagination
          currentPage={pagination.currentPage}
          totalElements={pagination.totalElements}
          pageSize={pagination.pageSize}
          totalPages={pagination.totalPages}
        />
      </div>
      {isUserSell && <SellPopup onClose={() => setModal('isUserSell', false)} />}
    </>
  )
}
