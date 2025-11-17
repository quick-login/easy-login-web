import '@/app/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'EASY-LOGIN',
  description: '소셜 로그인 원클릭 서비스',
  keywords: [
    '소셜 로그인',
    'OAuth',
    'EASY-LOGIN',
    '카카오 로그인',
    '네이버 로그인',
    '구글 로그인',
    '소셜 연동',
    '이지로그인',
  ],
  authors: [{ name: '이지플러그' }],
  creator: '이지플러그',
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'EASY-LOGIN',
    description: '소셜 로그인 원클릭 서비스',
    url: 'http://localhost:3000', //https://easy-login.co.kr
    siteName: 'EASY-LOGIN',
    images: [
      {
        url: 'https://github.com/user-attachments/assets/01917d46-4367-40ca-ab51-0f0d1443899e',
        width: 1200,
        height: 630,
        alt: 'EASY LOGIN Image',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  icons: {
    icon: 'easyLogin.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#242424',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="flex h-[100dvh] items-center justify-center bg-[linear-gradient(112.77deg,#8A8A8A_-2.34%,#242424_96.37%)]">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
