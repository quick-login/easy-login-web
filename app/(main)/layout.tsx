import { getCookie } from 'cookies-next'
import { userAction } from '@/src/entities/user/model/user-action'
import type { UserType } from '@/src/entities/user/type'
import { getCookies, setCookies } from '@/src/shared/lib/cookie'
import { SideMenu } from '@/src/widgets'

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const token = await getCookies('rc')
  // console.log(token)
  const user = null
  // if (token) user = await userAction()
  // await setCookies('layout', 'test')
  // await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/test`, { method: 'POST' })
  console.log('사용자 정보', user)
  const isLogin = Boolean(token)
  return (
    <main className="1060:p-[20px] h-full w-full">
      <div className="1060:flex-row flex h-full flex-col gap-[20px]">
        <SideMenu isLogin={isLogin} user={user?.data as UserType} />
        {children}
      </div>
    </main>
  )
}
