'use client'

import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { NoticeFixedItem, NoticeItem } from '@/src/entities/notice'
import { NoticeFixedListAction, NoticeListAction } from '@/src/entities/notice/model/notice-action'
import type { Notice } from '@/src/entities/notice/model/types'
import type { Page } from '@/src/shared/api/axios-client'
import { Button } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'
import { PageHeader, Pagination } from '@/src/widgets'

export const NoticeListPage = () => {
  const noticePage = Number(useSearchParams().get('page'))
  const [fixed, setFixed] = useState<Notice[]>([])
  const [basic, setBasic] = useState<Notice[]>([])
  const [page, setPage] = useState(noticePage)
  const [pagination, setPagination] = useState<Page>({
    currentPage: page,
    pageSize: 10,
    totalElements: 10,
    totalPages: 10,
  })

  console.log('쿼리 스트링', noticePage)

  const handleGetFixedNotices = useCallback(async () => {
    const response = await NoticeFixedListAction()

    if (response.success) {
      setFixed(response.data)
    } else {
      alert('고정 공지를 불러오는 데 오류가 발생했습니다.')
    }
  }, [])

  const handleGetNotices = useCallback(async () => {
    const response = await NoticeListAction(page)
    console.log(response.pagination)

    console.log('페이지', page)

    if (response.success) {
      setBasic(response.data)
      setPagination(response.pagination)
    } else {
      alert('공지를 불러오는 데 오류가 발생했습니다.')
    }
  }, [page])

  useEffect(() => {
    handleGetFixedNotices()
    handleGetNotices()
  }, [page])

  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="공지사항" />
      <hr className="border-gray2" />
      <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
        <table className="flex flex-col gap-[10px]">
          {fixed.map(d => (
            <NoticeFixedItem
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
        <Pagination
          currentPage={page}
          totalElements={pagination.totalElements}
          pageSize={pagination.pageSize}
          totalPages={pagination.totalPages}
          setPage={setPage}
        />
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
