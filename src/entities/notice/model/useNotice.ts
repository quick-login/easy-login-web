import { useEffect, useState } from 'react'
import { NoticeInfoAction } from './notice-action'
import { useAlertStore } from '@/src/shared/store'
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
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)

  const handleGetNotice = async (noticeId: number) => {
    const response = await NoticeInfoAction(noticeId)

    if (response.success) {
      setNotice(response.data)
    } else {
      onOpenAlert(response.message)
    }
  }

  useEffect(() => {
    handleGetNotice(noticeId)
  }, [noticeId])

  return { notice }
}
