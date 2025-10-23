import { axiosPatch, axiosPost } from '@/src/shared/api/axios-client'

type NoticeType = {
  title: string
  content: string
  fixed: boolean
}

export const postNotice = async (noticeData: NoticeType) => {
  const res = await axiosPost('/admin/api/v1/notice', noticeData)
  return res
}

export const patchNotice = async (noticeId: number, noticeData: NoticeType) => {
  const res = await axiosPatch(`/admin/api/v1/notice/${noticeId}`, noticeData)
  return res
}
