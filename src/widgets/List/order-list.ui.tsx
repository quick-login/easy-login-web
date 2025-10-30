'use client'

import { Pagination } from './pagination.ui'
import { OrderItem } from '@/src/entities/sell'
import { useOrderList } from '@/src/entities/sell/model/useOrderList'
import { Text } from '@/src/shared/ui'

export const OrderList = () => {
  const { orderList, pagination } = useOrderList()
  return orderList.length === 0 ? (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <Text className="text-gray5 font-semibold">상품 주문 내역이 존재하지 않습니다.</Text>
    </div>
  ) : (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <div className="flex flex-1 flex-col gap-[10px]">
        {orderList.map(order => (
          <OrderItem
            orderCode={order.orderCode}
            orderDate={order.orderDate}
            totalPrice={order.totalPrice}
            key={order.orderCode}
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
