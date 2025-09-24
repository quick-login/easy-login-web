import type { Metadata } from 'next'
import '@/src/app/globals.css'
import { cookies } from 'next/headers'
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
          <main className="h-[80%] w-[80%] rounded-[30px] bg-white p-[30px]">
            <div className="flex h-full w-full border border-red-900">
              <div className="flex w-1/3 flex-col items-center justify-center gap-[20px] border-[2px] border-blue-900 p-5">
                <div className="flex w-full flex-col items-center justify-center gap-[10px] border">
                  <Image src="/easyLogin.svg" alt="easyLogin" width={80} height={80} />
                  <Text children="이지로그인" className="text-[28px] font-bold" />
                </div>
                <div>
                  <Text children='"복잡한 소셜로그인을 한번에"' className="text-gray4 text-[20px]" />
                </div>
              </div>
              <div className="border-gray2 border" />
              <div className="flex w-2/3 flex-col items-center justify-center border-[2px] border-green-900 p-5">
                {children}
              </div>
            </div>
          </main>
        </body>
      ) : (
        <body className="flex h-[100vh] items-center justify-center bg-[linear-gradient(112.77deg,#8A8A8A_-2.34%,#242424_96.37%)]">
          <main className="h-[95%] w-[95%] rounded-[30px] bg-white p-[30px]">
            {/* <div className="flex h-full w-full border border-red-900">
              <div className="flex w-1/3 flex-col items-center justify-center gap-[20px] border-[2px] border-blue-900 p-5">
                <div className="flex w-full flex-col items-center justify-center gap-[10px] border">
                  <Image src="/easyLogin.svg" alt="easyLogin" width={80} height={80} />
                  <Text children="이지로그인" className="text-[28px] font-bold" />
                </div>
                <div>
                  <Text children='"복잡한 소셜로그인을 한번에"' className="text-gray4 text-[20px]" />
                </div>
              </div>
              <div className="border-gray2 border" />
              <div className="flex w-2/3 flex-col items-center justify-center border-[2px] border-green-900 p-5">
                {children}
              </div>
            </div> */}
          </main>
        </body>
      )}
    </html>
  )
}
