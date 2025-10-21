'use client'

import { Button, Input, LinkText, Text } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'
import { PageHeader } from '@/src/widgets'

export const CashRequestPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="캐시 충전" />
      <hr className="border-gray2" />
      <form className="flex flex-1 flex-col gap-[10px] p-[20px]">
        <Text className="text-gray5 font-semibold">입금 계좌</Text>
        {/* <Input />
        <Input /> */}
        <div className="border-gray3 flex rounded-[10px] border">
          <div className="border-r-gray3 font-pretendard text-gray5 flex-1 cursor-pointer border-r p-[10px] text-center">
            +5천원
          </div>
          <div className="border-r-gray3 font-pretendard text-gray5 flex-1 cursor-pointer border-r p-[10px] text-center">
            +1만원
          </div>
          <div className="border-r-gray3 font-pretendard text-gray5 flex-1 cursor-pointer border-r p-[10px] text-center">
            +3만원
          </div>
          <div className="border-r-gray3 font-pretendard text-gray5 flex-1 cursor-pointer border-r p-[10px] text-center">
            +5만원
          </div>
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
