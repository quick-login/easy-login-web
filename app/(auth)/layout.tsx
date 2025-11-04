import Image from 'next/image'
import { Text } from '@/shared/ui'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-[30px] bg-white p-[30px] lg:h-[600px] lg:w-[1000px] lg:flex-row lg:rounded-[30px]">
      <div className="flex w-full flex-col items-center justify-center gap-[20px] lg:w-[354px]">
        <div className="flex w-full flex-col items-center justify-center gap-[10px]">
          <Image src="/easyLogin.svg" alt="easyLogin" width={80} height={80} />
          <Text className="text-[28px] leading-[100%] font-bold">이지로그인</Text>
        </div>
        <Text className="text-gray4 text-[20px] leading-[150%] font-normal">"복잡한 소셜로그인을 한번에"</Text>
      </div>
      <div className="border-gray2 w-full border lg:block lg:h-full lg:w-0" />
      <div className="flex w-full flex-col items-center justify-center gap-[30px] lg:flex-1">{children}</div>
    </main>
  )
}
