'use server'

import z from 'zod'
import { deleteAdminSell, patchAdminSellStatus, postAdminAddSell, postOrderSell } from '../api/order-sell-api'
import { type ActionResponse, onActionResponse } from '@/shared/api'
import type { OrderSell } from './type'

const addSellSchema = z.object({
  name: z.string().min(1, '이름은 필수 값입니다.').max(50, '이름은 최대 50자입니다.'),
  price: z.number('가격은 필수 값입니다.').min(0, '최소 가격은 0원입니다.'),
  type: z.string().min(1, '타입을 선택해주세요.'),
  value: z.number('개수는 필수 값입니다.').min(1, '최소 개수는 1개입니다.'),
  discountRate: z.number().nullable().optional(),
})

export const orderSellAction = async (orderSell: OrderSell[]) => {
  const response = await postOrderSell(orderSell)
  return await onActionResponse(response)
}

export const adminAddSellAction = async (formData: FormData) => {
  const name = String(formData.get('name') ?? '')
  const price = formData.get('price') ? Number(String(formData.get('price')).replaceAll(',', '')) : -1
  const type = String(formData.get('type') ?? '')
  const value = formData.get('value') ? Number(String(formData.get('value')).replaceAll(',', '')) : -1
  const discountRate = Number(formData.get('discountRate'))

  const result = addSellSchema.safeParse({ name, price, type, value, discountRate })
  if (!result.success) {
    return {
      success: false,
      message: result.error.issues.map(msg => msg.message).join('\n'),
      code: '',
      data: null,
    } satisfies ActionResponse<null>
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
