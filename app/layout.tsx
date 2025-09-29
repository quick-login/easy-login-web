import type { Metadata } from 'next'
import '@/src/app/globals.css'
import Image from 'next/image'
import { getCookies } from '@/src/shared/lib/cookie'
import { Text } from '@/src/shared/ui/Text'

export const metadata: Metadata = {
  title: 'EASY-LOGIN',
  description: '소셜로그인 통합 플랫폼',
  icons: {
    icon: 'easyLogin.svg',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const token = await getCookies('token')
  return (
    <html lang="ko">
      {!token ? (
        <body className="flex h-[100vh] items-center justify-center bg-[linear-gradient(112.77deg,#8A8A8A_-2.34%,#242424_96.37%)]">
          <main className="flex h-[600px] w-[1000px] gap-[30px] rounded-[30px] bg-white p-[30px]">
            <div className="flex w-[354px] flex-col items-center justify-center gap-[20px]">
              <div className="flex w-full flex-col items-center justify-center gap-[10px]">
                <Image src="/easyLogin.svg" alt="easyLogin" width={80} height={80} />
                <Text className="text-[28px] leading-[100%] font-bold">이지로그인</Text>
              </div>
              <Text className="text-gray4 text-[20px] leading-[150%] font-normal">"복잡한 소셜로그인을 한번에"</Text>
            </div>
            <div className="border-gray2 h-[540px] border" />
            <div className="flex flex-1 flex-col items-center justify-center gap-[30px]">{children}</div>
          </main>
        </body>
      ) : (
        <body className="flex h-[100vh] items-center justify-center bg-[linear-gradient(112.77deg,#8A8A8A_-2.34%,#242424_96.37%)]">
          <main className="h-full w-full p-[20px]">{children}</main>
        </body>
      )}
    </html>
  )
}
