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

export const createEmailCodeAction = async (formData: FormData) => {
  const email = String(formData.get('email') ?? '')

  const result = emailSchema.safeParse({ email })
  if (!result.success) {
    return { success: false, message: '이메일 형식이 올바르지 않습니다.' }
  }

  const response = await postCreateEmailCode(email)

  if (response.code === 'E200') {
    return {
      success: true,
      message: '',
    }
  } else {
    return {
      success: false,
      message: response.message,
    }
  }
}

export const validateEmailAction = async (formData: FormData) => {
  const email = String(formData.get('email') ?? '')
  const code = String(formData.get('code') ?? '')

  const result = codeSchema.safeParse({ email, code })
  if (!result.success) {
    return { success: false, message: '인증코드 형식이 올바르지 않습니다.' }
  }

  const response = await postCheckEmailCode({ email, code })

  if (response.code === 'E200') {
    return {
      success: true,
      message: '이메일 인증 성공',
    }
  } else {
    return {
      success: false,
      message: response.message,
    }
  }
}
