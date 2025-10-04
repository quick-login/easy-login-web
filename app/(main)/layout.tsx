import { SideMenu } from '@/src/widgets'

export default function RegistLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="1060:p-[20px] h-full w-full">
      <div className="1060:flex-row flex h-full flex-col gap-[20px]">
        <SideMenu />
        {children}
      </div>
    </main>
  )
}
