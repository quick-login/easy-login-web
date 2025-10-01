import { SideMenu } from '@/src/widgets'

export default function RegistLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="h-full w-full p-[20px]">
      <div className="flex h-full gap-[20px]">
        <SideMenu />
        {children}
      </div>
    </main>
  )
}
