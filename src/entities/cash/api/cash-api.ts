import { axiosGet } from '@/src/shared/api/axios-client'
import type { Cash } from '../model/type'

export const getCashList = async (page: number, pageSize: number) => {
  const res = await axiosGet<Cash[]>(`/api/v1/cash/list?page=${page}&pageSize=${pageSize}`)
  return res
}
