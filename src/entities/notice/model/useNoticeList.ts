import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { NoticeFixedListAction, NoticeListAction } from './notice-action'
import type { Page } from '@/src/shared/api/axios-client'
import { useAlertStore } from '@/src/shared/store/useAlertStore'
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
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)

  const handleGetFixedNotices = useCallback(async () => {
    const response = await NoticeFixedListAction()

    if (response.success) {
      setFixed(response.data)
    } else {
      onOpenAlert(response.message)
    }
  }, [])

  const handleGetNotices = useCallback(async () => {
    const response = await NoticeListAction(noticePage)

    if (response.success) {
      setBasic(response.data)
      setPagination(response.pagination)
    } else {
      onOpenAlert(response.message)
    }
  }, [noticePage])

  useEffect(() => {
    handleGetFixedNotices()
  }, [])

  useEffect(() => {
    handleGetNotices()
    window.scrollTo(0, 0)
  }, [noticePage])

  return { fixed, basic, pagination }
}
