'use client'

import { useEffect, useState } from 'react'
import { NoticeInfo } from '@/src/entities/notice'
import { NoticeInfoAction } from '@/src/entities/notice/model/notice-action'
import type { NoticeItem } from '@/src/entities/notice/model/types'
import { DeleteNoticeInfoBtn } from '@/src/features/deleteDetail'
import { Button, Text } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'
import { PageHeader } from '@/src/widgets'

export const NoticeInfoPage = ({ noticeId }: { noticeId: number }) => {
  const [notice, setNotice] = useState<NoticeItem>({
    content: '',
    createdAt: '',
    name: '',
    noticeId: noticeId,
    title: '',
  })
  console.log('id', noticeId)

  const handleGetNotices = async (noticeId: number) => {
    const response = await NoticeInfoAction(noticeId)

    if (response.success) {
      setNotice(response.data)
    } else {
      alert('데이터를 불러오는 데 오류가 발생했습니다.')
    }
  }

  useEffect(() => {
    handleGetNotices(noticeId)
  }, [noticeId])

  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="공지사항" />
      <hr className="border-gray2" />
      <NoticeInfo
        content={notice.content}
        createdAt={notice.createdAt}
        name={notice.name}
        noticeId={notice.noticeId}
        title={notice.title}
      />

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
