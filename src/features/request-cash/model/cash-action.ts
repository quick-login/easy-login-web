'use server'

import { patchApproveCash, patchCancleCash, patchRejectCash, postReqCash } from '../api/cash-api'

export const requestCashAction = async (chargeCash: number) => {
  const res = await postReqCash(chargeCash)

  if (res.code === 'E200') {
    return { success: true, message: res.message }
  } else {
    return { success: false, message: res.message }
  }
}

export const cancleCashAction = async (CashLogId: number) => {
  const res = await patchCancleCash(CashLogId)

  if (res.code === 'E200') {
    return { success: true, message: res.message }
  } else {
    return { success: false, message: res.message }
  }
}

export const approveCashAction = async (cashChargeLogId: number) => {
  const res = await patchApproveCash(cashChargeLogId)

  if (res.code === 'E200') {
    return { success: true, message: res.message, data: res.data }
  } else {
    return { success: false, message: res.message, data: res.data }
  }
}

export const rejectCashAction = async (cashChargeLogId: number) => {
  const res = await patchRejectCash(cashChargeLogId)

  if (res.code === 'E200') {
    return { success: true, message: res.message, data: res.data }
  } else {
    return { success: false, message: res.message, data: res.data }
  }
}
