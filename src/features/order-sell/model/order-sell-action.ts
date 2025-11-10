'use server'

import z from 'zod'
import { deleteAdminSell, patchAdminSellStatus, postAdminAddSell, postOrderSell } from '../api/order-sell-api'
import { onActionResponse } from '@/shared/api'
import type { OrderSell } from './type'

const addSellSchema = z.object({
  name: z.string().min(1, '제목은 최소 1글자 입니다.').max(50, '제목은 최대 50글자 입니다.'),
  price: z.number().min(0, '최소 가격은 0원입니다.'),
  type: z.string().min(1),
  value: z.number().min(1, '최소 개수는 1개입니다.'),
  discountRate: z.number().nullable().optional(),
})

export const orderSellAction = async (orderSell: OrderSell[]) => {
  const response = await postOrderSell(orderSell)
  return await onActionResponse(response)
}

export const adminAddSellAction = async (formData: FormData) => {
  const name = String(formData.get('name') ?? '')
  const price = Number(String(formData.get('price') === '' ? 'null' : formData.get('price')).replaceAll(',', ''))
  const type = String(formData.get('type') ?? '')
  const value = Number(String(formData.get('value') === '' ? 'null' : formData.get('value')).replaceAll(',', ''))
  const discountRate = Number(formData.get('discountRate'))

  const result = addSellSchema.safeParse({ name, price, type, value, discountRate })
  if (!result.success) {
    return { success: false, message: '입력한 데이터를 다시 한번 확인해주세요.' }
  }

  const response = await postAdminAddSell({ name, price, type, value, discountRate })
  return await onActionResponse(response)
}

export const adminChangeStatusAction = async (productId: number) => {
  const response = await patchAdminSellStatus(productId)
  return await onActionResponse(response)
}

export const adminDeleteSellAction = async (productId: number) => {
  const response = await deleteAdminSell(productId)
  return await onActionResponse(response)
}
