'use client'

import { IconButton } from '@/src/shared/ui'

export const DeleteNoticeInfoBtn = ({ noticeId }: { noticeId: number }) => {
  const aaa = () => {
    console.log(noticeId)
  }
  return <IconButton alt="delete" title="삭제" onClick={aaa} />
}
