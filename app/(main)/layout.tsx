import { getCookies } from '@/src/shared/lib/cookie'
import { MobildHeader, SideMenu } from '@/src/widgets'

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const token = await getCookies('rc')
  const isLogin = Boolean(token)
  return (
    <main className="1060:p-[20px] h-full w-full">
      <div className="1060:flex-row flex h-full flex-col gap-[20px]">
        <SideMenu isLogin={isLogin} />
        <div className="flex flex-1 flex-col">
          <MobildHeader isLogin={isLogin} />
          {children}
        </div>
      </div>
    </main>
  )
}
