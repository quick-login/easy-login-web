import clsx from 'clsx'

type ButtonProps = {
  className?: string
  children: string
  onClick: () => void
  variant?: 'primary' | 'cancle' | 'noActive'
}

export const Button = ({ className, children, onClick, variant = 'primary' }: ButtonProps) => {
  const base = 'font-pretendard h-[50px] rounded-[10px] text-[16px]'
  const variants = {
    primary: 'bg-black text-white cursor-pointer',
    cancle: 'bg-white text-gray4 border border-gray3 cursor-pointer',
    noActive: 'bg-gray1 text-gray4 border border-gray3',
  }
  return (
    <button className={clsx(base, variants[variant], className)} onClick={() => variant !== 'noActive' && onClick()}>
      {children}
    </button>
  )
}
