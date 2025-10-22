'use server'

import { axiosGet } from '@/src/shared/api/axios-client'
import type { Notice, NoticeItem } from '../model/types'

export const getFixedNoticeList = async () => {
  const res = await axiosGet<Notice[]>('api/v1/notice/fixed-notice')
  return res
}

export const getNoticeList = async (page: number, pageSize: number) => {
  const res = await axiosGet<Notice[]>(`/api/v1/notice/list?page=${page}&pageSize=${pageSize}`)
  return res
}

export const getNoticeInfo = async (noticeId: number) => {
  const res = await axiosGet<NoticeItem>(`/api/v1/notice/${noticeId}`)
  return res
}
