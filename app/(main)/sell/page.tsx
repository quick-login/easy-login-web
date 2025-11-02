import { Suspense } from 'react'
import { SellPage } from '@/src/views'

export default async function Sell() {
  return (
    <Suspense>
      <SellPage />
    </Suspense>
  )
}
