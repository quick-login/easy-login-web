'use client'

import { Pagination } from './pagination.ui'
import { LoadingSkeleton } from './skeleton-list.ui'
import { NoticeFixedItem, NoticeItem, useNoticeList } from '@/src/entities/notice'
import { Text } from '@/src/shared/ui'

export const NoticeList = () => {
  const { pagination, basic, fixed, isLoading } = useNoticeList()

  if (isLoading) return <LoadingSkeleton />

  return basic.length === 0 ? (
    <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
      <Text className="text-gray5 font-semibold">공지사항이 존재하지 않습니다.</Text>
    </div>
  ) : (
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
        currentPage={pagination.currentPage}
        totalElements={pagination.totalElements}
        pageSize={pagination.pageSize}
        totalPages={pagination.totalPages}
      />
    </div>
  )
}
