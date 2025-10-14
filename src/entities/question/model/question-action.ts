'use server'

import { getQuestInfo, getQuestList } from '../api/question-api'

export const questListAction = async (page: number, pageSize: number) => {
  const res = await getQuestList(page, pageSize)

  if (res.code === 'E200') {
    console.log('받은 데이터', res)
    return { success: true, code: res.code, message: res.message, data: res.data, pagination: res.pagination! }
  } else {
    return { success: false, code: res.code, message: res.message, data: res.data, pagination: res.pagination! }
  }
}

export const questInfoAction = async (questionId: number) => {
  const res = await getQuestInfo(questionId)

  if (res.code === 'E200') {
    return { success: true, code: res.code, message: res.message, data: res.data }
  } else {
    return { success: false, code: res.code, message: res.message, data: res.data }
  }
}
