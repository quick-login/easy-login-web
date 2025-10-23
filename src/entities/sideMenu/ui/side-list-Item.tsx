import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { LinkText } from '@/src/shared/ui'

type EffectProps = {
  link: string
  itemName: string
}

export const SideListMenu = ({ link, itemName }: EffectProps) => {
  const path = usePathname()

  return (
    <div className="flex items-center gap-[6px]">
      <LinkText
        className={clsx('cursor-pointer text-[16px] font-normal', link === path ? 'text-dark' : 'text-gray4')}
        href={link === '/notice' ? '/notice?page=1' : link}
      >
        {itemName}
      </LinkText>
      <span className={clsx('h-[6px] w-[6px] rounded-2xl bg-black', link === path ? 'block' : 'hidden')} />
    </div>
  )
}
