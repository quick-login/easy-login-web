import Image from 'next/image'
import { useSellStore } from '@/src/shared/store/useSellStore'
import { A, Button, Input, Text } from '@/src/shared/ui'
import type { SellItem } from '../model/type'

type SellOrderProps = {
  orderQuantity: number
} & SellItem

export const SellListItem = ({ discountRate, finalPrice, name, price, product_id, orderQuantity }: SellOrderProps) => {
  const updateList = useSellStore(state => state.updateList)
  const changeList = useSellStore(state => state.changeList)
  const removeList = useSellStore(state => state.removeList)
  return (
    <li className="border-gray3 flex items-center justify-between rounded-[10px] border px-[15px] py-[5px]">
      <div className="flex items-center gap-[10px]">
        <Text className="text-[15px] font-semibold text-black">{name}</Text>
      </div>
      <div className="flex gap-[10px]">
        <div className="flex items-center justify-between gap-[20px]">
          {discountRate !== 0 && <Text className="text-negative text-[13px] font-semibold">{`${discountRate} %`}</Text>}
          <div className="flex items-center gap-[10px]">
            {discountRate !== 0 && (
              <Text className="text-gray5 text-[10px] font-semibold line-through">{`${(price * (orderQuantity ? orderQuantity : 1)).toLocaleString()}원`}</Text>
            )}
            <Text className="text-[13px] font-semibold text-black">{`${(finalPrice * (orderQuantity ? orderQuantity : 1)).toLocaleString()}원`}</Text>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <Button className="!h-[25px] w-[25px]" onClick={() => updateList(product_id, orderQuantity - 1)}>
            -
          </Button>
          <Input
            className="w-[50px] !p-[5px] text-center"
            type="text"
            name="orderQuantity"
            value={orderQuantity}
            onBlur={e => {
              const value = e.target.value
              const num = Number(value)
              if (num <= 0) changeList(product_id, 1)
            }}
            onChange={e => {
              const value = e.target.value
              const num = Number(value)
              console.log(num)
              if (isNaN(num)) return
              if (num > 100) {
                changeList(product_id, 100)
                return
              }
              changeList(product_id, num)
            }}
          />
          <Button className="!h-[25px] w-[25px]" onClick={() => updateList(product_id, orderQuantity + 1)}>
            +
          </Button>
          <Image alt="삭제" src={'/trash.svg'} width={15} height={15} onClick={() => removeList(product_id)} />
        </div>
      </div>
    </li>
  )
}
