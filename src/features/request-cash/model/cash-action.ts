'use server'

import { patchApproveCash, patchCancleCash, patchRejectCash, postReqCash } from '../api/cash-api'
import { onActionResponse } from '@/shared/api'

export const requestCashAction = async (chargeCash: number) => {
  const response = await postReqCash(chargeCash)
  return await onActionResponse(response)
}

export const cancleCashAction = async (CashLogId: number) => {
  const response = await patchCancleCash(CashLogId)
  return await onActionResponse(response)
}

export const approveCashAction = async (cashChargeLogId: number) => {
  const response = await patchApproveCash(cashChargeLogId)
  return await onActionResponse(response)
}

export const rejectCashAction = async (cashChargeLogId: number) => {
  const response = await patchRejectCash(cashChargeLogId)
  return await onActionResponse(response)
}
