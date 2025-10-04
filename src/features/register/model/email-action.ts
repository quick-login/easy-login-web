'use server'

import z from 'zod'
import { postCheckEmailCode, postCreateEmailCode } from '../api/email-api'

const emailSchema = z.object({
  email: z.string().email('이메일 형식이 올바르지 않습니다.'),
})
const codeSchema = z.object({
  email: z.string().email('이메일 형식이 올바르지 않습니다.'),
  code: z.string().regex(/^\d{6}$/, '숫자 6자리입니다.'),
})

export const handleCreateCode = async (formData: FormData) => {
  const email = String(formData.get('email') ?? '')

  const result = emailSchema.safeParse({ email })
  if (!result.success) {
    return { success: false, message: '이메일 형식이 올바르지 않습니다.' }
  }

  const res = await postCreateEmailCode(email)

  if (res.code === 'E200') {
    return {
      success: true,
      message: '',
    }
  } else {
    return {
      success: false,
      message: res.message,
    }
  }
}

export const handleValidateCode = async (formData: FormData) => {
  const email = String(formData.get('email') ?? '')
  const code = String(formData.get('code') ?? '')

  const result = codeSchema.safeParse({ email, code })
  if (!result.success) {
    return { success: false, message: '인증코드 형식이 올바르지 않습니다.' }
  }

  const res = await postCheckEmailCode({ email, code })

  if (res.code === 'E200') {
    return {
      success: true,
      message: '이메일 인증 성공',
    }
  } else {
    return {
      success: false,
      message: res.message,
    }
  }
}
