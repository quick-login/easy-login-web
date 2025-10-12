'use client'

import { Button, LinkText, Text } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'
import { PageHeader } from '@/src/widgets'

export const CashRequestPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="캐시 충전" />
      <hr className="border-gray2" />

      <hr className="border-gray2" />
      <Footer>
        <div></div>
        <Button type="button" variant="primary" className="p-[15px]">
          공지 작성
        </Button>
      </Footer>
    </section>
  )
}
