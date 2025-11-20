'use client'

import { useEffect, useState } from 'react'
import { noticeInfoAction } from './notice-action'
import { useResponse } from '@/shared/lib'
import type { NoticeItem } from './types'

export const useNotice = (noticeId: number) => {
  const [notice, setNotice] = useState<NoticeItem>({
    content: '',
    fixed: false,
    createdAt: '',
    name: '',
    noticeId: noticeId,
    title: '',
  })
  const handleResponse = useResponse()

  const handleGetNotice = async (noticeId: number) => {
    const response = await noticeInfoAction(noticeId)

    handleResponse(response, () => {
      setNotice(response.data)
    })
  }

  useEffect(() => {
    handleGetNotice(noticeId)
  }, [noticeId])

  return { notice }
}
