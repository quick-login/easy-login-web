import { Suspense } from 'react'
import { AdminSellPage } from '@/views'

export default async function AdminSell() {
  return (
    <Suspense>
      <AdminSellPage />
    </Suspense>
  )
}
