'use server'

import z from 'zod'
import { postQuest, postQuestAnswer } from '../api/quest-api'

const questSchema = z.object({
  title: z.string().min(1, '제목은 최소 1글자 입니다.').max(50, '제목은 최대 50글자 입니다.'),
  content: z.string().min(1, '본문은 최소 1글자 입니다.').max(1000, '본문은 최대 1000글자 입니다.'),
})
const answerSchema = z.object({
  answer: z.string().min(1, '답변은 최소 1글자 입니다.').max(1000, '답변은 최대 1000글자 입니다.'),
})

export const questWriteAction = async (formData: FormData) => {
  const title = String(formData.get('title') ?? '')
  const content = String(formData.get('content') ?? '')

  const result = questSchema.safeParse({ title, content })
  if (!result.success) {
    return { success: false, message: '제목은 1~50, 본문은 1~1000자 입니다.' }
  }

  const res = await postQuest({ title, content })

  if (res.code === 'E200') {
    return { success: true, message: res.message }
  } else {
    return { success: false, message: res.message }
  }
}

export const questAnswerAction = async (questionId: number, answer: string) => {
  const result = answerSchema.safeParse(answer)

  if (!result.success) return { success: false, message: '답변은 1~1000자 입니다.' }

  const res = await postQuestAnswer(questionId, answer)

  if (res.code === 'E200') {
    return { success: true, message: res.message }
  } else {
    return { success: true, message: res.message }
  }
}
