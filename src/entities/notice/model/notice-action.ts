import { getFixedNoticeList, getNoticeInfo, getNoticeList } from '../api/notice-api'
import { onActionResponse, type ActionResponse } from '@/shared/api'
import type { Notice, NoticeItem } from './types'

export const noticeListAction = async (page: number, pageSize: number = 10): Promise<ActionResponse<Notice[]>> => {
  const response = await getNoticeList(page, pageSize)
  return await onActionResponse(response)
}

export const noticeFixedListAction = async (): Promise<ActionResponse<Notice[]>> => {
  const response = await getFixedNoticeList()
  return await onActionResponse(response)
}

export const noticeInfoAction = async (noticeId: number): Promise<ActionResponse<NoticeItem>> => {
  const response = await getNoticeInfo(noticeId)
  return await onActionResponse(response)
}
