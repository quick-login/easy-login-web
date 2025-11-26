import { create } from 'zustand'
import type { Cash } from '@/entities/cash'
import type { AdminSellItem } from '@/entities/sell/model/type'

type Items = {
  adminCashList: Cash[]
  adminSellList: AdminSellItem[]
  setCashList: (cashList: Cash[]) => void
  setSellList: (sellList: AdminSellItem[]) => void
  onChangeCashStatus: (cashChargeLogId: number, value: 'REQUEST' | 'CHARGE_COMPLETED' | 'REJECTED' | 'CANCELED') => void
  onChangeSellStatus: (productId: number, value: 'SALE' | 'STOP') => void
  onDeleteSell: () => void
}

export const useItemStore = create<Items>((set, get) => ({
  adminCashList: [],
  adminSellList: [],
  setCashList: (cashList: Cash[]) => set({ adminCashList: cashList }),
  setSellList: (sellList: AdminSellItem[]) => set({ adminSellList: sellList }),
  onChangeCashStatus: (cashChargeLogId: number, value: 'REQUEST' | 'CHARGE_COMPLETED' | 'REJECTED' | 'CANCELED') =>
    set(state => ({
      adminCashList: state.adminCashList.map(item =>
        item.cashChargeLogId === cashChargeLogId ? { ...item, status: value } : item,
      ),
    })),
  onChangeSellStatus: (productId: number, value: 'SALE' | 'STOP') =>
    set(state => ({
      adminSellList: state.adminSellList.map(item =>
        item.productId === productId ? { ...item, status: value } : item,
      ),
    })),
  onDeleteSell: () => {},
}))
