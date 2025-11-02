import { Suspense } from 'react'
import { OrderListPage } from '@/src/views'

export default async function OrderList() {
  return (
    <Suspense>
      <OrderListPage />
    </Suspense>
  )
}
