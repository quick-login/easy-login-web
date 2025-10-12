'use client'

import { NoticeInfo } from '@/src/entities/notice'
import { DeleteNoticeInfoBtn } from '@/src/features/deleteDetail'
import { Button, Text } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'
import { PageHeader } from '@/src/widgets'

export const NoticeInfoPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="공지사항" />
      <hr className="border-gray2" />
      <NoticeInfo content="본문" createdAt="2025-09-13" name="송광호" noticeId={1234} title="[공지] 제목" />

      <hr className="border-gray2" />
      <Footer>
        <div className="text-negative flex cursor-pointer items-center justify-center gap-[4px] text-[16px]">
          <DeleteNoticeInfoBtn noticeId={1234} />
        </div>
        <div className="flex gap-[10px]">
          <Button className="p-[15px]" variant="cancle">
            이전으로
          </Button>
          <Button className="p-[15px]">수정하기</Button>
        </div>
      </Footer>
    </section>
  )
}
