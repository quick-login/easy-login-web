'use client'

import { useCallback, useEffect, useState } from 'react'
import { NoticeItem } from '@/src/entities/notice'
import { NoticeFixedListAction, NoticeListAction } from '@/src/entities/notice/model/notice-action'
import type { Notice } from '@/src/entities/notice/model/types'
import { Button } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'
import { PageHeader } from '@/src/widgets'

export const NoticeListPage = () => {
  const [fixed, setFixed] = useState<Notice[]>([])
  const [basic, setBasic] = useState<Notice[]>([])

  const handleGetFixedNotices = useCallback(async () => {
    const response = await NoticeFixedListAction()

    if (response.success) {
      setFixed(response.data)
    } else {
      alert('데이터를 불러오는 데 오류가 발생했습니다.')
    }
  }, [])

  const handleGetNotices = useCallback(async () => {
    const response = await NoticeListAction(1)

    if (response.success) {
      setBasic(response.data)
    } else {
      alert('데이터를 불러오는 데 오류가 발생했습니다.')
    }
  }, [])

  useEffect(() => {
    handleGetFixedNotices()
    handleGetNotices()
  }, [])

  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="공지사항" />
      <hr className="border-gray2" />
      <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
        <table className="flex flex-col gap-[10px]">
          {fixed.map(d => (
            <NoticeItem
              key={d.noticeId}
              createdAt={d.createdAt}
              fixed={d.fixed}
              name={d.name}
              noticeId={d.noticeId}
              title={d.title}
            />
          ))}
        </table>
        <table className="flex flex-1 flex-col gap-[10px]">
          {basic.map(d => (
            <NoticeItem
              key={d.noticeId}
              createdAt={d.createdAt}
              fixed={d.fixed}
              name={d.name}
              noticeId={d.noticeId}
              title={d.title}
            />
          ))}
        </table>
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
