'use client'

import { NoticeItem } from '@/src/entities/notice'
import { Button, LinkText, Text } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'
import { PageHeader } from '@/src/widgets'

export const NoticeListPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="공지사항" />
      <hr className="border-gray2" />
      <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
        <div className="flex flex-col gap-[10px]">
          <NoticeItem createdAt="2025-09-13" fixed={true} name="송광호" noticeId={1234} title="[공지] 제목" />
        </div>
        <div className="flex flex-1 flex-col gap-[10px] border">
          <NoticeItem createdAt="2025-09-13" fixed={false} name="송광호" noticeId={1234} title="[공지] 제목" />
        </div>
        <div className="flex items-center justify-center">페이지네이션</div>
      </div>
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
