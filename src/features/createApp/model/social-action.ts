'use server'

import z from 'zod'
import { patchSocialApp, postCrateApp } from '../api/social-api'
import { type ActionResponse, onActionResponse } from '@/shared/api'

const socialSchema = z.object({
  appId: z.number('appId는 필수값이며, 숫자여야 합니다.'),
  appName: z.string().min(1, 'appName은 필수 값입니다.').max(50, 'appName은 최대 50자입니다.'),
  restKey: z.string().min(1, 'restKey는 필수 값입니다.').max(50, 'RestKey는 최대 50자입니다.'),
  redirectUrl: z.string().max(255, 'redirectUrl는 최대 255글자 입니다.').nullable().optional(),
})

export const createAppAction = async (formData: FormData) => {
  const appId = formData.get('appId') ? Number(formData.get('appId')) : null
  const appName = String(formData.get('appName') ?? '')
  const restKey = String(formData.get('restKey') ?? '')
  const redirectUrl = formData.get('redirectUrl') ? String(formData.get('redirectUrl')) : null

  const result = socialSchema.safeParse({ appId, appName, restKey, redirectUrl })
  if (!result.success) {
    return {
      success: false,
      code: '',
      message: result.error.issues.map(msg => msg.message).join('\n'),
      data: null,
    } satisfies ActionResponse<null>
  }

  const response = await postCrateApp({ appId, appName, restKey, redirectUrl })
  return await onActionResponse(response)
}

export const patchAppAction = async (formData: FormData) => {
  const appId = formData.get('appId') ? Number(formData.get('appId')) : null
  const appName = String(formData.get('appName') ?? '')
  const restKey = String(formData.get('restKey') ?? '')
  const redirectUrl = formData.get('redirectUrl') ? String(formData.get('redirectUrl')) : null

  const result = socialSchema.safeParse({ appId, appName, restKey, redirectUrl })
  if (!result.success) {
    return {
      success: false,
      code: '',
      message: result.error.issues.map(msg => msg.message).join('\n'),
      data: null,
    } satisfies ActionResponse<null>
  }

  const response = await patchSocialApp({ appId, appName, restKey, redirectUrl })
  return await onActionResponse(response)
}
