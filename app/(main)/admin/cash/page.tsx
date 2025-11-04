import { Suspense } from 'react'
import { AdminCashListPage } from '@/src/views'

export default async function AdminCash() {
  return (
    <Suspense>
      <AdminCashListPage />
    </Suspense>
  )
}
