import { create } from 'zustand'
import type { Cash } from '@/entities/cash'
import type { AdminSellItem } from '@/entities/sell/model/type'

type Items = {
  adminCashList: Cash[]
  adminSellList: AdminSellItem[]
  setCashList: (cashList: Cash[]) => void
  setSellList: (sellList: AdminSellItem[]) => void
  onChangeCashStatus: (cashChargeLogId: number) => void
  onChangeSellStatus: (productId: number) => void
  onDeleteSell: () => void
}

export const useItemStore = create<Items>((set, get) => ({
  adminCashList: [],
  adminSellList: [],
  setCashList: (cashList: Cash[]) => set({ adminCashList: cashList }),
  setSellList: (sellList: AdminSellItem[]) => set({ adminSellList: sellList }),
  onChangeCashStatus: (cashChargeLogId: number) => {},
  onChangeSellStatus: (productId: number) =>
    set(state => ({
      adminSellList: state.adminSellList.map(item =>
        item.productId === productId ? { ...item, status: item.status === 'SALE' ? 'STOP' : 'SALE' } : item,
      ),
    })),
  onDeleteSell: () => {},
}))
