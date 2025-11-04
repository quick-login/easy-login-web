'use client'

import { useState } from 'react'
import { Pagination } from './pagination.ui'
import { OrderPopup } from '../popup/order-detail-popup.ui'
import { OrderItem, useOrderList } from '@/src/entities/sell'
import { useModalStore } from '@/src/shared/store'
import { Text } from '@/src/shared/ui'

export const OrderList = () => {
  const { orderList, pagination } = useOrderList()
  const isOrder = useModalStore(state => state.isOrder)
  const setModal = useModalStore(state => state.setModal)
  const [code, setCode] = useState<string>('')
  return orderList.length === 0 ? (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <Text className="text-gray5 font-semibold">주문 내역이 존재하지 않습니다.</Text>
    </div>
  ) : (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <ul className="flex flex-1 flex-col gap-[10px]">
        {orderList.map(order => (
          <OrderItem
            orderCode={order.orderCode}
            orderDate={order.orderDate}
            totalPrice={order.totalPrice}
            key={order.orderCode}
            onClick={() => {
              setCode(order.orderCode)
              setModal('isOrder', true)
            }}
          />
        ))}
      </ul>
      <Pagination
        currentPage={pagination.currentPage}
        totalElements={pagination.totalElements}
        pageSize={pagination.pageSize}
        totalPages={pagination.totalPages}
      />
      {isOrder && (
        <OrderPopup
          orderCode={code}
          onClose={() => {
            setCode('')
            setModal('isOrder', false)
          }}
        />
      )}
    </div>
  )
}
