'use client'

import { useDetailDelete } from '../model/useDetailDelete'
import { useConfirmStore } from '@/shared/store'
import { IconButton } from '@/shared/ui'

export const DeleteQuestInfoBtn = ({ questionId, className }: { questionId: number; className: string }) => {
  const { handleDeleteQuest } = useDetailDelete()
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  return (
    <IconButton
      alt="delete"
      title="삭제"
      className={className}
      onClick={() => onOpenConfirm('문의를 삭제하시겠습니까?', () => handleDeleteQuest(questionId))}
    />
  )
}
