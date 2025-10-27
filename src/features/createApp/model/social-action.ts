'use server'

import z from 'zod'
import { patchSocialApp, postCrateApp } from '../api/social-api'

const registSchema = z.object({
  appName: z.string().max(50, '이름은 최대 50글자입니다.'),
  restKey: z.string().max(50, 'RestKey 는 최대 50글자 입니다.'),
  redirectUrl: z.string().max(255, 'redirectUrl는 최대 255글자 입니다.').nullable().optional(),
})

export const createAppAction = async (formData: FormData) => {
  const appId = Number(formData.get('appId') ?? '')
  const appName = String(formData.get('appName') ?? '')
  const restKey = String(formData.get('restKey') ?? '')
  const redirectUrl = String(formData.get('redirectUrl') ?? '')

  const result = registSchema.safeParse({ appName, restKey, redirectUrl })
  if (!result.success) {
    return { success: false, message: '입력된 정보가 형식에 맞지 않아요' }
  }

  const response = await postCrateApp({ appId, appName, restKey, redirectUrl })
  if (response.code === 'E200') {
    return { success: true, message: response.message }
  } else {
    return { success: false, message: response.message }
  }
}

export const patchAppAction = async (formData: FormData) => {
  const appId = Number(formData.get('appId') ?? '')
  const appName = String(formData.get('appName') ?? '')
  const restKey = String(formData.get('restKey') ?? '')
  const redirectUrl = String(formData.get('redirectUrl') ?? '')

  const result = registSchema.safeParse({ appName, restKey, redirectUrl })
  if (!result.success) {
    return { success: false, message: '입력된 정보가 형식에 맞지 않아요' }
  }

  const response = await patchSocialApp({ appId, appName, restKey, redirectUrl })
  if (response.code === 'E200') {
    return { success: true, message: response.message }
  } else {
    return { success: false, message: response.message }
  }
}
