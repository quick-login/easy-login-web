import { create } from 'zustand'
import type { Cash } from '@/entities/cash'
import type { AdminSellItem } from '@/entities/sell/model/type'

type Items = {
  adminCashList: Cash[]
  adminSellList: AdminSellItem[]
  setCashList: (cashList: Cash[]) => void
  setSellList: (sellList: AdminSellItem[]) => void
  setSellListInfinite: (sellList: AdminSellItem[]) => void
  onChangeCashStatus: (cashChargeLogId: number, value: 'REQUEST' | 'CHARGE_COMPLETED' | 'REJECTED' | 'CANCELED') => void
  onChangeSellStatus: (productId: number, value: 'SALE' | 'STOP') => void
  onAddSell: (sellItem: AdminSellItem) => void
  onDeleteSell: (productId: number) => void
  clearAdminSell: () => void
}

export const useItemStore = create<Items>((set, get) => ({
  adminCashList: [],
  adminSellList: [],
  setCashList: (cashList: Cash[]) => set({ adminCashList: cashList }),
  setSellListInfinite: (sellList: AdminSellItem[]) =>
    set(state => ({ adminSellList: [...state.adminSellList, ...sellList] })),
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
  onAddSell: (sellItem: AdminSellItem) =>
    set(state => ({
      adminSellList: [sellItem, ...state.adminSellList],
    })),
  onDeleteSell: (productId: number) =>
    set(state => ({
      adminSellList: state.adminSellList.filter(item => item.productId !== productId),
    })),
  clearAdminSell: () => set({ adminSellList: [] }),
}))
