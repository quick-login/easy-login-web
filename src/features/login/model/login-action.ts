'use server'

import { redirect } from 'next/navigation'
import z from 'zod'
import { signIn } from '../../../../auth'
import { postLogin } from '../api/login-api'

export type State = {
  success?: boolean
  message: string
}

const loginSchema = z.object({
  email: z.string().email('이메일 형식이 올바르지 않습니다.'),
  password: z
    .string()
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*~])[a-zA-Z0-9!@#$%^&*~]{6,30}$/,
      '영문자,숫자,특수문자를 조합해 6~30자입니다.',
    ),
})

export const handleLoginAction = async (prevState: State, formData: FormData) => {
  const email = String(formData.get('email') ?? '')
  const password = String(formData.get('password') ?? '')

  const result = loginSchema.safeParse({ email, password })
  if (!result.success) {
    return { success: false, message: '아이디 혹은 비밀번호를 다시 입력해주세요' }
  }

  const res = await postLogin({ email, password })

  if (res.code === 'E200') {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/member/info`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${res.data.accessToken}`,
      },
    })
    const userInfo = await response.json()

    await signIn('credentials', {
      role: userInfo.data.role,
      accessToken: res.data.accessToken,
      refreshToken: res.data.refreshToken,
      redirect: false,
    })

    redirect('/')
  } else {
    return { success: false, message: res.message }
  }
}
