import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { onPathEffect } from '../model/onPathEffect'
import { LinkText } from '@/shared/ui'
import type { ReactNode } from 'react'

type Props = {
  link: string
  itemName: string
  children: ReactNode
}

export const SideListMenu = ({ link, itemName, children }: Props) => {
  const path = usePathname()
  console.log(path)

  return (
    <div className="flex items-center gap-[6px]">
      <LinkText
        className={clsx(
          'cursor-pointer text-[16px] font-normal',
          onPathEffect(path, itemName) ? 'text-dark' : 'text-gray4',
        )}
        href={link}
      >
        {children}
      </LinkText>
      <span
        className={clsx('h-[6px] w-[6px] rounded-2xl bg-black', onPathEffect(path, itemName) ? 'block' : 'hidden')}
      />
    </div>
  )
}
