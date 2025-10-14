import clsx from 'clsx'
import type { ReactNode } from 'react'

type PageButtonProps = {
  children: ReactNode
  onClick: () => void
  isDisable: boolean
}

export const PageButton = ({ children, onClick, isDisable }: PageButtonProps) => {
  return (
    <button
      className={clsx(
        'font-pretendard hover:bg-gray2 border-gray3 cursor-pointer rounded-[10px] border px-[10px] py-[5px] text-[16px] font-semibold',
        isDisable && 'hidden',
      )}
      onClick={onClick}
      disabled={isDisable}
    >
      {children}
    </button>
  )
}
