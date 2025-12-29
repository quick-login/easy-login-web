import { Suspense } from 'react'
import { CashListPage } from '@/views'
// import { headers } from 'next/headers'

export default async function CashList() {
  // const h = headers()

  // const forwardedFor = h.get('x-forwarded-for')
  // const realIp = h.get('x-real-ip')

  // console.log('ee', forwardedFor, realIp)
  return (
    <Suspense>
      <CashListPage />
    </Suspense>
  )
}
