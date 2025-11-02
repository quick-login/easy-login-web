import { Suspense } from 'react'
import { CashListPage } from '@/src/views'

export default async function CashList() {
  return (
    <Suspense>
      <CashListPage />
    </Suspense>
  )
}
