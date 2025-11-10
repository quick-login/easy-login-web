import { Suspense } from 'react'
import { CashListPage } from '@/views'

export default async function CashList() {
  return (
    <Suspense>
      <CashListPage />
    </Suspense>
  )
}
