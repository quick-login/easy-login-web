import { useEffect, useState } from 'react'
import { NoticeInfoAction } from './notice-action'
import type { NoticeItem } from './types'

export const useNotice = (noticeId: number) => {
  const [notice, setNotice] = useState<NoticeItem>({
    content: '',
    createdAt: '',
    name: '',
    noticeId: noticeId,
    title: '',
  })

  const handleGetNotice = async (noticeId: number) => {
    const response = await NoticeInfoAction(noticeId)

    if (response.success) {
      setNotice(response.data)
    } else {
      alert('데이터를 불러오는 데 오류가 발생했습니다.')
    }
  }

  useEffect(() => {
    handleGetNotice(noticeId)
  }, [noticeId])

  return { notice }
}
