import clsx from 'clsx'
import type { ComponentProps } from 'react'

export const A = ({ ...props }: ComponentProps<'a'>) => {
  return (
    <a {...props} className={clsx('font-pretendard text-gray5 cursor-pointer p-[10px] text-center', props.className)}>
      {props.children}
    </a>
  )
}
