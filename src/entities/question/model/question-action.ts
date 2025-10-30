'use server'

import { getAdminQuestInfo, getAdminQuestList, getQuestInfo, getQuestList } from '../api/question-api'

export const questListAction = async (page: number, pageSize: number = 10) => {
  const response = await getQuestList(page, pageSize)

  if (response.code === 'E200') {
    return {
      success: true,
      code: response.code,
      message: response.message,
      data: response.data,
      pagination: response.pagination!,
    }
  } else {
    return {
      success: false,
      code: response.code,
      message: response.message,
      data: response.data,
      pagination: response.pagination!,
    }
  }
}

export const questInfoAction = async (questionId: number) => {
  const response = await getQuestInfo(questionId)

  if (response.code === 'E200') {
    return { success: true, code: response.code, message: response.message, data: response.data }
  } else {
    return { success: false, code: response.code, message: response.message, data: response.data }
  }
}

export const adminQuestListAction = async (page: number, pageSize: number = 10, STATUS: string) => {
  const response = await getAdminQuestList(page, pageSize, STATUS)

  if (response.code === 'E200') {
    return {
      success: true,
      code: response.code,
      message: response.message,
      data: response.data,
      pagination: response.pagination!,
    }
  } else {
    return {
      success: false,
      code: response.code,
      message: response.message,
      data: response.data,
      pagination: response.pagination!,
    }
  }
}

export const adminQuestInfoAction = async (questionId: number) => {
  const response = await getAdminQuestInfo(questionId)

  if (response.code === 'E200') {
    return { success: true, code: response.code, message: response.message, data: response.data }
  } else {
    return { success: false, code: response.code, message: response.message, data: response.data }
  }
}
