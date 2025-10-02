import Image from 'next/image'
import { Text } from '@/src/shared/ui'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
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
  )
}
