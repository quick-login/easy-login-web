import { getFixedNoticeList, getNoticeInfo, getNoticeList } from '../api/notice-api'
import { onActionResponse, type ActionResponse } from '@/shared/api'
import type { Notice, NoticeItem } from './types'

export const NoticeListAction = async (page: number, pageSize: number = 10): Promise<ActionResponse<Notice[]>> => {
  const response = await getNoticeList(page, pageSize)
  return await onActionResponse(response)
}

export const NoticeFixedListAction = async (): Promise<ActionResponse<Notice[]>> => {
  const response = await getFixedNoticeList()
  return await onActionResponse(response)
}

export const NoticeInfoAction = async (noticeId: number): Promise<ActionResponse<NoticeItem>> => {
  const response = await getNoticeInfo(noticeId)
  return await onActionResponse(response)
}
