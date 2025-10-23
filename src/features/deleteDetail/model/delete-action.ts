'use server'

import { deleteNotice, deleteQuest } from '../api/quest-api'

export const questDeleteAction = async (questionId: number) => {
  const res = await deleteQuest(questionId)

  if (res.code === 'E200') {
    return { success: true, message: res.message }
  } else {
    return { success: false, message: res.message }
  }
}

export const noticeDeleteAction = async (noticeId: number) => {
  const res = await deleteNotice(noticeId)

  if (res.code === 'E200') {
    return { success: true, message: res.message }
  } else {
    return { success: false, message: res.message }
  }
}
