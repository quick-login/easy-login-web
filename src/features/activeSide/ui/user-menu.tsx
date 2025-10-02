import { SideItem } from '@/src/entities/sideMenu'

type UserMenuProps = {
  sideOn: boolean
}
export const UserMenu = ({ sideOn }: UserMenuProps) => {
  return <SideItem sideOn={sideOn} />
}
