'use client'

import { useDetailDelete } from '../model/useDetailDelete'
import { useConfirmStore } from '@/src/shared/store'
import { IconButton } from '@/src/shared/ui'

export const DeleteQuestInfoBtn = ({ questionId }: { questionId: number }) => {
  const { handleDeleteQuest } = useDetailDelete()
  const onOpenConfirm = useConfirmStore(state => state.onOpenConfirm)
  return (
    <IconButton
      alt="delete"
      title="삭제"
      onClick={() => onOpenConfirm('문의를 삭제하시겠습니까?', () => handleDeleteQuest(questionId))}
    />
  )
}
