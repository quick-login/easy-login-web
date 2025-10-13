import { axiosGet } from '@/src/shared/api/axios-client'
import type { QuestInfo, Question } from '../model/types'

export const getQuestList = async (page: number, pageSize: number) => {
  const res = await axiosGet<Question[]>(`/api/v1/question/list?page=${page}&pageSize=${pageSize}`)
  return res
}

export const getQuestInfo = async (questionId: number) => {
  const res = await axiosGet<QuestInfo>(`/api/v1/question/${questionId}`)
  return res
}
