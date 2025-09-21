import type { Metadata } from 'next'
import '@/src/app/globals.css'

export const metadata: Metadata = {
  title: 'EASY-LOGIN',
  description: '소셜로그인 통합 플랫폼',
  icons: {
    icon: 'easyLogin.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="bg-[linear-gradient(112.77deg,#8A8A8A_-2.34%,#242424_96.37%)]">{children}</body>
    </html>
  )
}
