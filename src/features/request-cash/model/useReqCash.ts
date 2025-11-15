'use client'

import { useRouter } from 'next/navigation'
import { type ChangeEvent, useState } from 'react'
import { approveCashAction, cancleCashAction, rejectCashAction, requestCashAction } from './cash-action'
import { useFeatureResponse } from '@/shared/lib'

export const useReqCash = () => {
  const handleResponse = useFeatureResponse()
  const router = useRouter()
  const [cash, setCash] = useState<string>('')

  const handleChangeCash = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    let num = Number(value.replaceAll(',', ''))
    if (value === '0') return
    if (value === '') {
      setCash('')
      return
    }
    if (Number(value) < 1) num = 1
    setCash(num.toLocaleString())
  }

  const handleCashBtn = (value: number) => {
    const num = Number(cash.replaceAll(',', '')) + value
    setCash(num.toLocaleString())
  }

  const handleReqCash = async () => {
    const num = Number(cash.replaceAll(',', ''))
    const response = await requestCashAction(num)
    handleResponse(response, '캐시가 신청되었습니다.', () => router.push('/cash/list?page=1'))
  }

  const handleCancleCash = async (cashChargeLogId: number) => {
    const response = await cancleCashAction(cashChargeLogId)
    handleResponse(response, '캐시 신청이 취소되었습니다.', () => window.location.reload())
  }

  const handleAdminRejectCash = async (cashChargeLogId: number) => {
    const response = await rejectCashAction(cashChargeLogId)
    handleResponse(response, '신청이 반려되었습니다.', () => window.location.reload())
  }

  const handleAdminApproveCash = async (cashChargeLogId: number) => {
    const response = await approveCashAction(cashChargeLogId)
    handleResponse(response, '신청이 승인되었습니다.', () => window.location.reload())
  }

  return {
    cash,
    handleCashBtn,
    handleChangeCash,
    handleReqCash,
    handleCancleCash,
    handleAdminRejectCash,
    handleAdminApproveCash,
  }
}
