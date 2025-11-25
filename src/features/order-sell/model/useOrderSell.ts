import { orderSellAction } from './order-sell-action'
import { useFeatureResponse } from '@/shared/lib'
import { useSellStore, useUserStore } from '@/shared/store'
import type { OrderSell } from './type'

export const useOrderSell = () => {
  const handleResponse = useFeatureResponse()
  const list = useSellStore(state => state.list)
  const clearList = useSellStore(state => state.clearList)
  const totalPrice = useSellStore(state => state.onTotalPrice)
  const updateSession = useUserStore(state => state.updateSession)
  const user = useUserStore(state => state.user)

  const handleOrder = async () => {
    const order: OrderSell[] = Array.from(list.entries())
      .map(sell => [{ productId: sell[0], orderQuantity: sell[1].orderQuantity }])
      .flat()

    const response = await orderSellAction(order)
    handleResponse(response, '주문이 완료됐습니다!', async () => {
      updateSession('cash', user.cash - totalPrice())
      clearList()
    })
  }

  return { handleOrder }
}
