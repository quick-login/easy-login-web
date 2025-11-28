import QueryProvider from '@/app/provider'
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
        <QueryProvider>
          <div className="1060:pt-0 flex flex-1 flex-col pt-[60px]">
            <MobildHeader />
            {children}
          </div>
        </QueryProvider>
      </div>
    </main>
  )
}
