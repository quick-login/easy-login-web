import { getSession } from '@/shared/lib'
import { Text } from '@/shared/ui'

export const UserCount = async () => {
  const session = await getSession()
  return (
    <div className="flex flex-col gap-[10px] p-[20px]">
      <Text className="text-gray4 text-[14px] md:text-[16px]">회원님의 남은 API 호출 횟수, 앱 최대 보유량 입니다.</Text>
      <Text className="text-[14px] font-semibold text-black md:text-[16px]">{`남은 API 호출 횟수 : ${Number(session?.user?.remainCount).toLocaleString()} 회`}</Text>
      <div className="flex flex-col items-center justify-center gap-[10px] text-[14px] md:flex-row md:text-[16px]">
        <Text className="border-gray3 w-full rounded-[10px] border p-[10px] text-center">
          {`카카오 총 ${Number(session?.user?.maxKakaoAppCount).toLocaleString()} 개 보유 가능`}
        </Text>
        <Text className="border-gray3 w-full rounded-[10px] border p-[10px] text-center">
          {`네이버 서비스 준비 중`}
        </Text>
        <Text className="border-gray3 w-full rounded-[10px] border p-[10px] text-center">{`구글 서비스 준비 중`}</Text>
      </div>
    </div>
  )
}
