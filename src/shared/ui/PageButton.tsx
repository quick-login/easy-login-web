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
        'font-pretendard hover:bg-gray2 cursor-pointer rounded-[5px] px-[10px] font-normal',
        isDisable && 'bg-gray2',
      )}
      onClick={onClick}
      disabled={isDisable}
    >
      {children}
    </button>
  )
}
