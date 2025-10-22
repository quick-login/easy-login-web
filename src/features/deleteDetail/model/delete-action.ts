'use server'

import { deleteQuest } from '../api/quest-api'

export const questDeleteAction = async (questionId: number) => {
  const res = await deleteQuest(questionId)

  if (res.code === 'E200') {
    return { success: true, message: res.message }
  } else {
    return { success: false, message: res.message }
  }
}
