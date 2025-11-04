import { axiosGet } from '@/shared/api'
import type { QuestInfo, Question } from '../model/types'

export const getQuestList = async (page: number, pageSize: number) => {
  const response = await axiosGet<Question[]>(`/api/v1/question/list?page=${page}&pageSize=${pageSize}`)
  return response
}

export const getQuestInfo = async (questionId: number) => {
  const response = await axiosGet<QuestInfo>(`/api/v1/question/${questionId}`)
  return response
}

export const getAdminQuestList = async (page: number, pageSize: number, STATUS: string) => {
  const response = await axiosGet<Question[]>(
    `/admin/api/v1/question/list?page=${page}&pageSize=${pageSize}&status=${STATUS}`,
  )
  return response
}

export const getAdminQuestInfo = async (questionId: number) => {
  console.log('id', questionId)
  const response = await axiosGet<QuestInfo>(`/admin/api/v1/question/${questionId}`)
  return response
}
