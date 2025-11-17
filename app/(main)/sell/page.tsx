import { Suspense } from 'react'
import { SellPage } from '@/views'

export default async function Sell() {
  return (
    <Suspense>
      <SellPage />
    </Suspense>
  )
}
