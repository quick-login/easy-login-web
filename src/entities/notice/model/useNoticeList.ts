import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { NoticeFixedListAction, NoticeListAction } from './notice-action'
import type { Page } from '@/src/shared/api/axios-client'
import type { Notice } from './types'

export const useNoticeList = () => {
  const noticePage = Number(useSearchParams().get('page'))
  const [fixed, setFixed] = useState<Notice[]>([])
  const [basic, setBasic] = useState<Notice[]>([])
  const [pagination, setPagination] = useState<Page>({
    currentPage: noticePage,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  })

  const handleGetFixedNotices = useCallback(async () => {
    const response = await NoticeFixedListAction()

    if (response.success) {
      setFixed(response.data)
    } else {
      alert('고정 공지를 불러오는 데 오류가 발생했습니다.')
    }
  }, [])

  const handleGetNotices = useCallback(async () => {
    const response = await NoticeListAction(noticePage)
    console.log(response.pagination)

    if (response.success) {
      setBasic(response.data)
      setPagination(response.pagination)
    } else {
      alert('공지를 불러오는 데 오류가 발생했습니다.')
    }
  }, [noticePage])

  useEffect(() => {
    handleGetFixedNotices()
    handleGetNotices()
    window.scrollTo(0, 0)
  }, [noticePage])

  return { fixed, basic, pagination }
}
