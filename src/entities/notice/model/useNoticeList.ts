import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { NoticeFixedListAction, NoticeListAction } from './notice-action'
import type { Page } from '@/shared/api'
import { useResponse } from '@/shared/lib/useResponse'
import type { Notice } from './types'

export const useNoticeList = () => {
  const noticePage = Number(useSearchParams().get('page'))
  const [fixed, setFixed] = useState<Notice[]>([])
  const [basic, setBasic] = useState<Notice[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [pagination, setPagination] = useState<Page>({
    currentPage: noticePage,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  })
  const handleResponse = useResponse()

  const handleGetFixedNotices = useCallback(async () => {
    const response = await NoticeFixedListAction()
    handleResponse(response, () => {
      setFixed(response.data)
    })
  }, [])

  const handleGetNotices = useCallback(async () => {
    setIsLoading(true)
    const response = await NoticeListAction(noticePage)
    handleResponse(response, () => {
      setBasic(response.data)
      setPagination(response.pagination!)
    })
    setIsLoading(false)
  }, [noticePage])

  useEffect(() => {
    handleGetFixedNotices()
  }, [])

  useEffect(() => {
    handleGetNotices()
    window.scrollTo(0, 0)
  }, [noticePage])

  return { fixed, basic, pagination, isLoading }
}
