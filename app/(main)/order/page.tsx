import { Suspense } from 'react'
import { OrderListPage } from '@/views'

export default async function OrderList() {
  return (
    <Suspense>
      <OrderListPage />
    </Suspense>
  )
}
