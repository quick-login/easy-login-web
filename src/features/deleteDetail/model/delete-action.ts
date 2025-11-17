'use server'

import { deleteNotice, deleteQuest } from '../api/quest-api'
import { onActionResponse } from '@/shared/api'

export const questDeleteAction = async (questionId: number) => {
  const response = await deleteQuest(questionId)
  return await onActionResponse(response)
}

export const noticeDeleteAction = async (noticeId: number) => {
  const response = await deleteNotice(noticeId)
  return await onActionResponse(response)
}
