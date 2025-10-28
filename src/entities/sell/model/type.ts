export type SellItem = {
  product_id: number
  name: string
  price: number
  discountRate: number
  finalPrice: number
}

export type AdminSellItem = {
  productId: number
  price: number
  discountRate: number
  type: 'API_REMAIN_COUNT_INCREMENT' | 'KAKAO_APP_REGISTER_INCREMENT'
  value: number
  typeDescription: string
  status: 'SALE' | 'STOP'
}

export type Order = {
  orderCode: string
  totalPrice: number
  orderDate: string
}

export type OrderInfo = {
  orderProducts: OrderProducts[]
} & Order

export type OrderProducts = {
  productName: string
  productType: 'API_REMAIN_COUNT_INCREMENT' | 'KAKAO_APP_REGISTER_INCREMENT'
  productTypeDescription: string
  value: number
  orderQuantity: number
  price: number
  discountRate: number
}
