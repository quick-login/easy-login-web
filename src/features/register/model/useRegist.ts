import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { registAction } from './regist-action'
import { useFeatureResponse } from '@/shared/lib'
import type { RegistType } from '../type'

export const useRegist = () => {
  const [regist, setRegist] = useState<RegistType>({
    email: '',
    name: '',
    password: '',
    passwordCheck: '',
    kakaoId: null,
  })
  const handleResponse = useFeatureResponse()
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
    handleResponse(response, '회원가입이 완료되었습니다.', () => router.push('/login'))
  }

  return { regist, handleChangeRegist, handleSubmitRegist }
}
