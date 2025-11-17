import { LinkText, Text } from '@/shared/ui'

export default async function Notfound() {
  return (
    <main className="flex flex-col items-center justify-center rounded-[20px] bg-white">
      <section className="felx-1 flex w-full flex-col items-center justify-center gap-[10px] p-[40px]">
        <h1 className="text-2xl text-[30px] font-bold">404</h1>
        <div className="flex flex-col items-center gap-[30px]">
          <Text className="text-[16px] font-medium text-gray-500">해당 페이지를 찾을 수 없습니다.</Text>
        </div>
      </section>
      <LinkText href="/" className="bg-dark w-full rounded-b-[20px] p-[15px] text-center text-white">
        Go to Home
      </LinkText>
    </main>
  )
}
