export type Cash = {
  cashChargeLogId: number
  chargeCash: number
  status: 'REQUEST' | 'CHARGE_COMPLETED' | 'REJECTED' | 'CANCELED'
  requestDate: string
}
