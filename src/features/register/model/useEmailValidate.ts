import { useState } from 'react'
import { createEmailCodeAction, validateEmailAction } from './email-action'
import { useModalStore } from '@/shared/store'
import type { CreateActionType, ValidateActionType } from '../type'

export const useEmailValidate = () => {
  const [emailRes, setEmailRes] = useState<CreateActionType>({
    success: false,
    message: '',
  })
  const [codeRes, setCodeRes] = useState<ValidateActionType>({
    success: false,
    message: '',
  })
  const setModal = useModalStore(state => state.setModal)

  const handleCreateCode = async (formData: FormData) => {
    const response = await createEmailCodeAction(formData)
    if (response.success) {
      setModal('isEmail', true)
      setEmailRes(response)
    } else {
      setEmailRes(response)
    }
  }

  const handleValidateCode = async (formData: FormData) => {
    const response = await validateEmailAction(formData)
    if (response.success) {
      setModal('isEmail', false)
      setCodeRes(response)
    } else {
      setCodeRes(response)
    }
  }

  return { emailRes, codeRes, setCodeRes, handleCreateCode, handleValidateCode }
}
