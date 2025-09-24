import clsx from 'clsx'

type TextProps = {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export const Text = ({ className, children, onClick }: TextProps) => {
  return (
    <div className={clsx('font-pretendard text-black', className)} onClick={onClick}>
      {children}
    </div>
  )
}
