import type { Cash } from '@/entities/cash'
import { axiosPatch, axiosPost } from '@/shared/api'

export const postReqCash = async (chargeCash: number) => {
  const response = await axiosPost<null>('/api/v1/cash/request', { chargeCash })
  return response
}

export const patchCancleCash = async (CashLogId: number) => {
  const response = await axiosPatch<null>(`/api/v1/cash/cancel/${CashLogId}`)
  return response
}

export const patchApproveCash = async (cashChargeLogId: number) => {
  const response = await axiosPatch<Cash>(`/admin/api/v1/cash/approve/${cashChargeLogId}`)
  return response
}

export const patchRejectCash = async (cashChargeLogId: number) => {
  const response = await axiosPatch<Cash>(`/admin/api/v1/cash/reject/${cashChargeLogId}`)
  return response
}
