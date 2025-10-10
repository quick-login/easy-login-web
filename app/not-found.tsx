import { LinkText, Text } from '@/src/shared/ui'

export default async function Notfound() {
  return (
    <main className="flex flex-col items-center justify-center gap-[10px] rounded-[20px] bg-white p-[40px]">
      <h1 className="text-2xl text-[30px] font-bold">404</h1>
      <div className="flex flex-col items-center gap-[30px]">
        <Text className="text-[16px] font-medium text-gray-500">해당 페이지를 찾을 수 없습니다.</Text>
        <LinkText link="/" className="bg-dark rounded-[10px] p-[15px] text-white">
          Go to Home
        </LinkText>
      </div>
    </main>
  )
}
