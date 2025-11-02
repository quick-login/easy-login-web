import { axiosDelete } from '@/src/shared/api'

export const deleteQuest = async (questionId: number) => {
  const res = await axiosDelete(`/api/v1/question/cancel/${questionId}`)
  return res
}

export const deleteNotice = async (noticeId: number) => {
  const res = await axiosDelete(`/admin/api/v1/notice/${noticeId}`)
  return res
}
