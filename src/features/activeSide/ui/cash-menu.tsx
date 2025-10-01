import { SideCash } from '@/src/entities/sideMenu'

type CashMenu = {
  sideOn: boolean
}
export const CashMenu = ({ sideOn }: CashMenu) => {
  return <SideCash sideOn={sideOn} />
}
