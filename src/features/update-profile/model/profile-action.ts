'use server'

import z from 'zod'
import { patchProfile, postLogout } from '../api/profile-api'
import { type ActionResponse, onActionResponse } from '@/shared/api'
import { updateSession } from '@/shared/lib'

const registSchema = z
  .object({
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

export const profilePatchAction = async (formData: FormData) => {
  const name = String(formData.get('name') ?? '')
  const password = String(formData.get('password') ?? '')
  const passwordCheck = String(formData.get('passwordCheck') ?? '')

  const result = registSchema.safeParse({ name, password, passwordCheck })
  if (!result.success) {
    return {
      success: false,
      message: '입력된 정보가 형식에 맞지 않아요',
      code: '',
      data: null,
    } satisfies ActionResponse<null>
  }

  const response = await patchProfile({ name, password, passwordCheck })
  return await onActionResponse(response, async () => await updateSession({ user: { name: name } }))
}

export const userLogoutAction = async () => {
  const response = await postLogout()
  return await onActionResponse(response)
}
