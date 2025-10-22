import { axiosDelete, axiosPost } from '@/src/shared/api/axios-client'

type PostQuestType = {
  title: string
  content: string
}

export const postQuest = async (questData: PostQuestType) => {
  const res = await axiosPost('/api/v1/question', questData)
  return res
}

export const postQuestAnswer = async (questionId: number, answer: string) => {
  const res = await axiosPost(`/admin/api/v1/question/answer/${questionId}`, answer)
  return res
}

export const deleteQuest = async (questionId: number) => {
  const res = await axiosDelete(`/api/v1/question/cancel/${questionId}`)
  return res
}
