import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { registAction } from './regist-action'
import { useAlertStore } from '@/src/shared/store'
import type { RegistType } from '../type'

export const useRegist = () => {
  const [regist, setRegist] = useState<RegistType>({
    email: '',
    name: '',
    password: '',
    passwordCheck: '',
    kakaoId: null,
  })
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)
  const router = useRouter()

  const handleChangeRegist = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegist(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmitRegist = async (formData: FormData) => {
    const response = await registAction(formData)

    if (response.success) {
      onOpenAlert('회원가입이 완료되었습니다!', () => {
        router.push('/login')
      })
    } else {
      onOpenAlert(response.message)
    }
  }

  return { regist, handleChangeRegist, handleSubmitRegist }
}
