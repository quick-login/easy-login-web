import { axiosGet } from '@/src/shared/api'
import type { Cash } from '../model/type'

export const getCashList = async (page: number, pageSize: number) => {
  const res = await axiosGet<Cash[]>(`/api/v1/cash/list?page=${page}&pageSize=${pageSize}`)
  return res
}

export const getAdminCashList = async (page: number, pageSize: number) => {
  const res = await axiosGet<Cash[]>(`/admin/api/v1/cash/list?page=${page}&pageSize=${pageSize}`)
  return res
}
