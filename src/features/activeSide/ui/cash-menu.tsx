import { SideCash } from '@/src/entities/sideMenu'

type CashMenu = {
  sideOn: boolean
  cash: number
}
export const CashMenu = ({ sideOn, cash }: CashMenu) => {
  return <SideCash sideOn={sideOn} cash={cash} />
}
