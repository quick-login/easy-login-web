import { create } from 'zustand'

type Sell = {
  name: string
  price: number
  discountRate: number
  finalPrice: number
  orderQuantity: number
}

type SellOrder = {
  list: Map<number, Sell>
  addList: (product_id: number, sell: Sell) => void
  removeList: (product_id: number) => void
  updateList: (product_id: number, newOrderQuantity: number) => void
  changeList: (product_id: number, newOrderQuantity: number) => void
  clearList: () => void
  onTotalPrice: () => number
  onPrice: () => number
}

export const useSellStore = create<SellOrder>((set, get) => ({
  list: new Map(),
  addList: (product_id, sell) =>
    set(state => {
      const newMap = new Map(state.list)
      newMap.set(product_id, sell)
      return { list: newMap }
    }),
  removeList: product_id =>
    set(state => {
      const newMap = new Map(state.list)
      newMap.delete(product_id)
      return { list: newMap }
    }),
  updateList: (product_id, newOrderQuantity) =>
    set(state => {
      if (newOrderQuantity <= 0) return { state }
      const newMap = new Map(state.list)
      const current = newMap.get(product_id)
      if (current) newMap.set(product_id, { ...current, orderQuantity: newOrderQuantity })
      return { list: newMap }
    }),
  changeList: (product_id, newOrderQuantity) =>
    set(state => {
      const newMap = new Map(state.list)
      const current = newMap.get(product_id)
      if (current) newMap.set(product_id, { ...current, orderQuantity: newOrderQuantity })
      return { list: newMap }
    }),
  clearList: () => set({ list: new Map() }),
  onTotalPrice: () => {
    const list = get().list
    const sum = Array.from(list.values()).reduce((acc, cur) => {
      if (cur.orderQuantity === 0) return acc + cur.finalPrice * 1
      else return acc + cur.finalPrice * cur.orderQuantity
    }, 0)
    return sum
  },
  onPrice: () => {
    const list = get().list
    const sum = Array.from(list.values()).reduce((acc, cur) => {
      if (cur.orderQuantity === 0) return acc + cur.price * 1
      else return acc + cur.price * cur.orderQuantity
    }, 0)
    return sum
  },
}))
