'use client'

import { IconButton } from '@/src/shared/ui'

export const DeleteQuestInfoBtn = ({ questionId }: { questionId: number }) => {
  const aaa = () => {
    console.log(questionId)
  }
  return <IconButton alt="delete" title="삭제" onClick={aaa} />
}
