import Image from 'next/image'
import { MainFooter } from '@/entities/main'
import { Text } from '@/shared/ui'

export const ExceptPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <div className="flex flex-1 flex-col items-center justify-center gap-[10px] p-[20px]">
        <Image src="/easyLogin.svg" alt="easyLogin" width={250} height={250} className="opacity-10" />
        <Text className="text-[20px] font-semibold">페이지가 준비중입니다.</Text>
      </div>
      <hr className="border-gray2" />
      <MainFooter />
    </section>
  )
}
