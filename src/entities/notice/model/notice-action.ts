import { getFixedNoticeList, getNoticeInfo, getNoticeList } from '../api/notice-api'

export const NoticeListAction = async (page: number, pageSize: number = 10) => {
  const res = await getNoticeList(page, pageSize)

  if (res.code === 'E200') {
    return { success: true, code: res.code, message: res.message, data: res.data }
  } else {
    return { success: false, code: res.code, message: res.message, data: res.data }
  }
}

export const NoticeFixedListAction = async () => {
  const res = await getFixedNoticeList()

  if (res.code === 'E200') {
    return { success: true, code: res.code, message: res.message, data: res.data }
  } else {
    return { success: false, code: res.code, message: res.message, data: res.data }
  }
}

export const NoticeInfoAction = async (noticeId: number) => {
  const res = await getNoticeInfo(noticeId)

  if (res.code === 'E200') {
    return { success: true, code: res.code, message: res.message, data: res.data }
  } else {
    return { success: false, code: res.code, message: res.message, data: res.data }
  }
}
