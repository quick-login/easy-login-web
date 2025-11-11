import Image from 'next/image'
import { useSellStore } from '@/shared/store'
import { Button, Input, Text } from '@/shared/ui'
import type { SellItem } from '../model/type'

type SellOrderProps = {
  orderQuantity: number
} & SellItem

export const SellListItem = ({ discountRate, finalPrice, name, price, product_id, orderQuantity }: SellOrderProps) => {
  const updateList = useSellStore(state => state.updateList)
  const changeList = useSellStore(state => state.changeList)
  const removeList = useSellStore(state => state.removeList)

  return (
    <li className="border-gray3 flex flex-col items-center justify-between gap-[5px] rounded-[10px] border px-[15px] py-[10px]">
      <div className="flex w-full items-center justify-between gap-[10px]">
        <Text className="truncate text-[15px] font-semibold text-black">{name}</Text>
        <Image alt="삭제" src={'/trash.svg'} width={15} height={15} onClick={() => removeList(product_id)} />
      </div>
      <div className="flex w-full justify-end gap-[10px]">
        <div className="flex items-center justify-between gap-[20px]">
          {/* {discountRate !== 0 && <Text className="text-negative text-[13px] font-semibold">{`${discountRate} %`}</Text>} */}
          <Text className="text-negative text-[13px] font-semibold">{`${100} %`}</Text>
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
          {/* <Image alt="삭제" src={'/trash.svg'} width={15} height={15} onClick={() => removeList(product_id)} /> */}
        </div>
      </div>
    </li>
  )
}
