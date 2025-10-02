import { MainBanner, MainFooter, SocialBtn } from '../entities/main'
import { Text } from '../shared/ui'
import { PageHeader } from '../widgets'

export const MainPage = () => {
  return (
    <section className="scrollbar-hidden flex h-full flex-1 flex-col overflow-auto rounded-[20px] bg-white">
      <PageHeader title="제품 소개" />
      <hr className="border-gray2" />
      <div className="gap-[10px] p-[20px]">
        <div className="flex gap-[10px]">
          <SocialBtn img="/kakao.svg" title="카카오 로그인 연결하기" link="/" />
          <SocialBtn img="/naver.svg" title="네이버 로그인 연결하기" link="/" />
          <SocialBtn img="/google.svg" title="구글 로그인 연결하기" link="/" />
        </div>
      </div>
      <hr className="border-gray2" />
      <div className="gap-[10px] p-[20px]">
        <Text className="text-[20px] leading-[100%] font-semibold">이런 점이 좋아요</Text>
      </div>
      <hr className="border-gray2" />
      <div className="flex-1 gap-[10px] p-[20px]">
        <div className="flex gap-[10px]">
          <MainBanner img="/home1.svg" title="소셜로그인 간편 구현">
            이지로그인에서 제공하는 <br />
            API를 사용하여 간편하게 <br />
            소셜로그인을 구현할 수 있습니다
          </MainBanner>
          <MainBanner img="/home2.svg" title="소셜로그인 다중 구현">
            여러 개의 소셜로그인을 <br />
            구현해야하나요? <br />
            이지로그인은 소셜로그인 한 개 당 <br />한 번의 API 호출만 필요합니다
          </MainBanner>
          <MainBanner img="/home3.svg" title="소셜로그인 간편 구현">
            소셜로그인 구현시간을 <br />
            대폭 줄여드립니다
          </MainBanner>
        </div>
      </div>
      <hr className="border-gray2" />
      <MainFooter />
    </section>
  )
}
