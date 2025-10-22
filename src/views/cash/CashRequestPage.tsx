'use client'

import { Button, Input, Text } from '@/src/shared/ui'
import { A } from '@/src/shared/ui/A'
import { Footer } from '@/src/shared/ui/Footer'
import { PageHeader } from '@/src/widgets'

export const CashRequestPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="캐시 충전" />
      <hr className="border-gray2" />
      <form className="flex flex-1 flex-col gap-[10px] p-[20px]">
        <Text className="text-gray5 font-semibold">입금 계좌</Text>
        <Input />
        <Input placeholder="충전할 금액을 입력해주세요." type="number" inputMode="numeric" />
        <div className="border-gray3 flex rounded-[10px] border">
          <A className="border-r-gray3 flex-1 border-r">+5천원</A>
          <A className="border-r-gray3 flex-1 border-r">+1만원</A>
          <A className="border-r-gray3 flex-1 border-r">+3만원</A>
          <A className="flex-1">+5만원</A>
        </div>
        <Text className="text-gray5 font-semibold">충전 신청 후 영업일 3일 이내 승인됩니다.</Text>
      </form>
      <hr className="border-gray2" />
      <Footer>
        <div />
        <Button type="button" variant="primary" className="p-[15px]">
          충전 신청하기
        </Button>
      </Footer>
    </section>
  )
}
