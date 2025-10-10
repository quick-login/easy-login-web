import { LinkText, Text } from '@/src/shared/ui'

export default async function Notfound() {
  return (
    <main className="1060:rounded-[20px] flex h-full flex-col items-center justify-center gap-[10px] bg-white">
      <h1 className="text-2xl text-[35px] font-bold">404</h1>
      <div className="flex flex-col items-center gap-[30px]">
        <div className="flex flex-col items-center gap-[10px]">
          <Text className="400:text-[18px] text-[16px] font-medium text-gray-500">
            해당 소셜 로그인은 지원하지 않습니다.
          </Text>
          <Text className="400:text-[18px] text-[16px] font-medium text-gray-500">
            <b className="text-dark">네이버 및 구글 로그인</b> 은 추후 지원 예정입니다.
          </Text>
        </div>
        <LinkText link="/" className="bg-dark rounded-[10px] p-[15px] text-white">
          Go to Home
        </LinkText>
      </div>
    </main>
  )
}
