import { getSession } from '../model/user-auth'
import { Text } from '@/src/shared/ui'

export const UserCount = async () => {
  const session = await getSession()
  return (
    <div className="flex flex-col gap-[20px] p-[20px]">
      <Text className="text-gray4">회원님의 남은 API 호출 횟수, 앱 최대 보유량 입니다.</Text>
      <Text className="font-semibold text-black">{`남은 API 호출 횟수 : ${Number(session?.user?.remainCount).toLocaleString()} 회`}</Text>
      <div className="flex items-center justify-center gap-[10px]">
        <div className="border-gray3 font-pretendard flex flex-1 items-center justify-center rounded-[10px] border p-[10px] font-medium">
          {`카카오 앱 최대 보유량 : ${Number(session?.user?.maxKakaoAppCount).toLocaleString()} 개`}
        </div>
        <div className="border-gray3 font-pretendard flex flex-1 items-center justify-center rounded-[10px] border p-[10px] font-medium">
          {`네이버 앱 최대 보유량 : 준비 중`}
        </div>
        <div className="border-gray3 font-pretendard flex flex-1 items-center justify-center rounded-[10px] border p-[10px] font-medium">
          {`구글 앱 최대 보유량 : 준비 중`}
        </div>
      </div>
    </div>
  )
}
