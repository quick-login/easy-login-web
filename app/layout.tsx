import '@/app/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { Metadata } from 'next'

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
  return (
    <html lang="ko">
      <body className="flex h-[100vh] items-center justify-center bg-[linear-gradient(112.77deg,#8A8A8A_-2.34%,#242424_96.37%)]">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
