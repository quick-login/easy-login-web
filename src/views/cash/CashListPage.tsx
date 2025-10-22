'use client'

import { Button, LinkText, Text } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'
import { PageHeader } from '@/src/widgets'

export const CashListPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="캐시 충전 내역" />
      <hr className="border-gray2" />
      <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
        <div className="flex flex-col gap-[10px]">
          <LinkText
            href="/notice/123"
            className="border-gray3 flex items-center justify-between rounded-[10px] border px-[15px] py-[10px]"
          >
            <div className="flex items-center gap-[10px]">
              <Text className="bg-gray2 rounded-[5px] p-[5px] text-[10px] font-semibold text-black">승인 완료</Text>
              <Text className="font-semibold text-black">20000</Text>
            </div>
            <Text className="text-gray5 text-[13px] font-semibold">25.09.25 23:59</Text>
          </LinkText>
          <div className="border-gray3 flex cursor-pointer items-center justify-between rounded-[10px] border px-[15px] py-[10px]">
            <div className="flex items-center gap-[10px]">
              <Text className="bg-gray2 rounded-[5px] p-[5px] text-[10px] font-semibold text-black">승인 대기</Text>
              <Text className="font-semibold text-black">20000</Text>
            </div>
            <Text className="text-gray5 text-[13px] font-semibold">25.09.25 23:59</Text>
          </div>
          <div className="border-gray3 flex cursor-pointer items-center justify-between rounded-[10px] border px-[15px] py-[10px]">
            <div className="flex items-center gap-[10px]">
              <Text className="bg-gray2 rounded-[5px] p-[5px] text-[10px] font-semibold text-black">승인 대기</Text>
              <Text className="font-semibold text-black">20000</Text>
            </div>
            <Text className="text-gray5 text-[13px] font-semibold">25.09.25 23:59</Text>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">페이지네이션</div>
    </section>
  )
}
