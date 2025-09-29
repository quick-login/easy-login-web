type ButtonProps = {
  className?: string
  children: string
  onClick: () => void
}

export const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button
      className={`font-pretendard cursor-pointer rounded-[10px] bg-black text-[16px] text-white ${className ?? ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
