'use client'

import { useDetailDelete } from '../model/useDetailDelete'
import { useConfirmStore } from '@/shared/store'
import { IconButton } from '@/shared/ui'

export const DeleteNoticeInfoBtn = ({ noticeId }: { noticeId: number }) => {
  const { handleDeleteNotice } = useDetailDelete()
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  return (
    <IconButton
      alt="delete"
      title="삭제"
      onClick={() => onOpenConfirm('공지를 삭제하시겠습니까?', () => handleDeleteNotice(noticeId))}
    />
  )
}
