import { Suspense } from 'react'
import { AdminSellPage } from '@/src/views'

export default async function AdminSell() {
  return (
    <Suspense>
      <AdminSellPage />
    </Suspense>
  )
}
