'use server'

import { getAdminQuestInfo, getAdminQuestList, getQuestInfo, getQuestList } from '../api/question-api'
import { onActionResponse } from '@/shared/api'

export const questListAction = async (page: number, pageSize: number = 10) => {
  const response = await getQuestList(page, pageSize)
  return await onActionResponse(response)
}

export const questInfoAction = async (questionId: number) => {
  const response = await getQuestInfo(questionId)
  return await onActionResponse(response)
}

export const adminQuestListAction = async (page: number, pageSize: number = 10, STATUS: string) => {
  const response = await getAdminQuestList(page, pageSize, STATUS)
  return await onActionResponse(response)
}

export const adminQuestInfoAction = async (questionId: number) => {
  const response = await getAdminQuestInfo(questionId)
  return await onActionResponse(response)
}
