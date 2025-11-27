import type { QuestInfo } from '@/entities/question'
import { axiosPost } from '@/shared/api'

type QuestType = {
  title: string
  content: string
}

export const postQuest = async (questData: QuestType) => {
  const res = await axiosPost<null>('/api/v1/question', questData)
  return res
}

export const postQuestAnswer = async (questionId: number, answer: string) => {
  const res = await axiosPost<QuestInfo>(`/admin/api/v1/question/answer/${questionId}`, { answer })
  return res
}
