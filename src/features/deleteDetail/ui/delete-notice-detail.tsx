'use client'

import { useDetailDelete } from '../model/useDetailDelete'
import { IconButton } from '@/src/shared/ui'

export const DeleteNoticeInfoBtn = ({ noticeId }: { noticeId: number }) => {
  const { handleDeleteNotice } = useDetailDelete()
  return <IconButton alt="delete" title="삭제" onClick={() => handleDeleteNotice(noticeId)} />
}
