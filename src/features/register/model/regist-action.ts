'use server'

import z from 'zod'
import { postRegist } from '../api/regist-api'

const registSchema = z
  .object({
    email: z.string().email('이메일 형식이 올바르지 않습니다.'),
    name: z.string().max(10, '이름은 최대 10글자입니다.'),
    password: z
      .string()
      .min(6, '비밀번호는 최소 8자 이상입니다.')
      .max(30, '비밀번호는 최대 30자입니다.')
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*~])[a-zA-Z0-9!@#$%^&*~]{6,30}$/,
        '영문자,숫자,특수문자를 조합해 6~30자입니다.',
      ),
    passwordCheck: z.string(),
  })
  .refine(data => data.password === data.passwordCheck, {
    path: ['passwordCheck'],
    message: '비밀번호가 일치하지 않습니다.',
  })

export const handleRegist = async (formData: FormData) => {
  const email = String(formData.get('email') ?? '')
  const name = String(formData.get('name') ?? '')
  const password = String(formData.get('password') ?? '')
  const passwordCheck = String(formData.get('passwordCheck') ?? '')

  const result = registSchema.safeParse({ email, name, password, passwordCheck })
  if (!result.success) {
    return { success: false, message: '입력된 정보가 형식에 맞지 않아요' }
  }

  const res = await postRegist({ email, name, password, passwordCheck, kakaoId: null })

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
