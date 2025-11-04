import { axiosPost } from '@/src/shared/api'

type QuestType = {
  title: string
  content: string
}

export const postQuest = async (questData: QuestType) => {
  const res = await axiosPost('/api/v1/question', questData)
  return res
}

export const postQuestAnswer = async (questionId: number, answer: string) => {
  console.log('id', questionId)
  const res = await axiosPost(`/admin/api/v1/question/answer/${questionId}`, { answer })
  return res
}
