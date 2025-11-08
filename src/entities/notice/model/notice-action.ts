import { getFixedNoticeList, getNoticeInfo, getNoticeList } from '../api/notice-api'
import { onActionResponse, type ActionResponse } from '@/shared/api'
import type { Notice, NoticeItem } from './types'

export const NoticeListAction = async (page: number, pageSize: number = 10): Promise<ActionResponse<Notice[]>> => {
  const res = await getNoticeList(page, pageSize)
  return await onActionResponse(res)
}

export const NoticeFixedListAction = async (): Promise<ActionResponse<Notice[]>> => {
  const res = await getFixedNoticeList()
  return await onActionResponse(res)
}

export const NoticeInfoAction = async (noticeId: number): Promise<ActionResponse<NoticeItem>> => {
  const res = await getNoticeInfo(noticeId)
  return await onActionResponse(res)
}
