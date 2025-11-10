import { MobildHeader, SideMenu } from '@/widgets'

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="1060:p-[20px] h-full w-full">
      <div className="1060:flex-row flex h-full flex-col gap-[20px]">
        <SideMenu />
        <div className="flex flex-1 flex-col">
          <MobildHeader />
          {children}
        </div>
      </div>
    </main>
  )
}
