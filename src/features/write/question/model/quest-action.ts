'use server'

import z from 'zod'
import { postQuest, postQuestAnswer } from '../api/quest-api'
import { type ActionResponse, onActionResponse } from '@/shared/api'

const questSchema = z.object({
  title: z.string().min(1, '제목은 필수 값입니다.').max(50, '제목은 최대 50자 입니다.'),
  content: z.string().min(1, '본문은 필수 값입니다.').max(1000, '본문은 최대 1000자 입니다.'),
})
const answerSchema = z.object({
  answer: z.string().min(1, '답변은 필수 값입니다.').max(1000, '답변은 최대 1000자입니다.'),
})

export const questWriteAction = async (formData: FormData) => {
  const title = String(formData.get('title') ?? '')
  const content = String(formData.get('content') ?? '')

  const result = questSchema.safeParse({ title, content })
  if (!result.success) {
    return {
      success: false,
      message: '제목은 1~50, 본문은 1~1000자 입니다.',
      code: '',
      data: null,
    } satisfies ActionResponse<null>
  }

  const response = await postQuest({ title, content })
  return await onActionResponse(response)
}

export const adminAnswerAction = async (questionId: number, formData: FormData) => {
  const answer = String(formData.get('answer') ?? '')

  const result = answerSchema.safeParse({ answer })
  if (!result.success)
    return { success: false, message: '답변은 1~1000자 입니다.', code: '', data: null } satisfies ActionResponse<null>

  const response = await postQuestAnswer(questionId, answer)
  return await onActionResponse(response)
}
