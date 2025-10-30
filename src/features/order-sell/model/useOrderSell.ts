import { useRouter } from 'next/navigation'
import { orderSellAction } from './order-sell-action'
import { useAlertStore } from '@/src/shared/store/useAlertStore'
import { useSellStore } from '@/src/shared/store/useSellStore'
import type { OrderSell } from './type'

export const useOrderSell = () => {
  const router = useRouter()
  const list = useSellStore(state => state.list)
  const clearList = useSellStore(state => state.clearList)
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)

  const handleOrder = async () => {
    const order: OrderSell[] = Array.from(list.entries())
      .map(sell => [{ productId: sell[0], orderQuantity: sell[1].orderQuantity }])
      .flat()

    const response = await orderSellAction(order)
    if (response.success) {
      onOpenAlert('주문이 완료됐습니다!', () => {
        clearList()
        router.push('/sell?page=1')
      })
    } else {
      onOpenAlert(response.message)
    }
  }

  return { handleOrder }
}
