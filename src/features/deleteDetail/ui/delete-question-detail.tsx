'use client'

import { useDetailDelete } from '../model/useDetailDelete'
import { IconButton } from '@/src/shared/ui'

export const DeleteQuestInfoBtn = ({ questionId }: { questionId: number }) => {
  const { handleDeleteQuest } = useDetailDelete()
  return <IconButton alt="delete" title="삭제" onClick={() => handleDeleteQuest(questionId)} />
}
