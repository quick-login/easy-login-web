'use server'

import { getUserInfo } from '../api/user-api'
import { updateSession } from '@/shared/lib'

export const userAction = async () => {
  const response = await getUserInfo()

  if (response.code === 'E200') {
    const { cash, email, maxKakaoAppCount, name, remainCount, role } = response.data
    // await updateSession({
    //   user: {
    //     cash: cash,
    //     name: name,
    //     email: email,
    //     maxKakaoAppCount: maxKakaoAppCount,
    //     remainCount: remainCount,
    //     role: role,
    //     updateAt: new Date().toISOString(),
    //   },
    // })

    return { success: true }
  } else {
    return { success: false }
  }
}
