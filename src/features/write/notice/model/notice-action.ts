'use server'

import z from 'zod'
import { patchNotice, postNotice } from '../api/notice-api'

const noticeSchema = z.object({
  title: z.string().min(1, '제목은 최소 1글자 입니다.').max(50, '제목은 최대 50글자 입니다.'),
  content: z.string().min(1, '본문은 최소 1글자 입니다.').max(2000, '본문은 최대 2000글자 입니다.'),
})

export const noticeWriteAction = async (formData: FormData) => {
  const title = String(formData.get('title') ?? '')
  const content = String(formData.get('content') ?? '')
  const fixed = Boolean(formData.get('fixed') ?? false)

  const result = noticeSchema.safeParse({ title, content })
  if (!result.success) {
    return { success: false, message: '제목은 1~50, 본문은 1~2000자 입니다.' }
  }

  const res = await postNotice({ title, content, fixed })

  if (res.code === 'E200') {
    return { success: true, message: res.message }
  } else {
    return { success: false, message: res.message }
  }
}

export const noticePatchAction = async (noticeId: number, formData: FormData) => {
  const title = String(formData.get('title') ?? '')
  const content = String(formData.get('content') ?? '')
  const fixed = Boolean(formData.get('fixed') ?? false)

  const result = noticeSchema.safeParse({ title, content })
  if (!result.success) {
    return { success: false, message: '제목은 1~50, 본문은 1~2000자 입니다.' }
  }

  const res = await patchNotice(noticeId, { title, content, fixed })

  if (res.code === 'E200') {
    return { success: true, message: res.message }
  } else {
    return { success: false, message: res.message }
  }
}
