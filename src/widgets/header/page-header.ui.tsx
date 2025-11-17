export const PageHeader = ({ title }: { title: string }) => {
  return (
    <header className="gap-[10px] p-[20px]">
      <h1 className="font-pretendard text-[20px] leading-[120%] font-semibold text-black">{title}</h1>
    </header>
  )
}
