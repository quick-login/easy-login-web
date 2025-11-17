import { Suspense } from 'react'
import { AdminCashListPage } from '@/views'

export default async function AdminCash() {
  return (
    <Suspense>
      <AdminCashListPage />
    </Suspense>
  )
}
