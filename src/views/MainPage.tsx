'use client'
// 이거 지우고, input 태그값들 공통 컴포넌트로 수정해야함
import Image from 'next/image'
import { Button, Text } from '../shared/ui'

export const MainPage = () => {
  return (
    <div className="flex h-full gap-[20px]">
      <aside data-id="사이드 메뉴" className="flex h-full w-[280px] flex-col rounded-[20px] bg-white">
        <div data-title="사이드 로고" className="flex w-full justify-between p-[20px]">
          <div className="flex items-center gap-[4px]">
            <Image src="/easyLogin.svg" alt="easyLogin" width={24} height={24} />
            <Text className="text-[16px] font-semibold">이지로그인</Text>
          </div>
          <Image className="cursor-pointer" src="/menu.svg" alt="menu" width={24} height={24} />
        </div>
        <hr className="border-gray2" />
        <div data-title="사이드 본문" className="flex flex-1 flex-col gap-[30px] p-[20px]">
          <div data-title="사본 판매상품" className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[4px]">
              <Image src="/shop.svg" alt="shop" width={24} height={24} />
              <Text className="text-[16px] font-semibold">판매상품</Text>
            </div>
            <div className="flex cursor-pointer items-center gap-[6px]">
              <Text className="text-[16px] font-normal">제품소개</Text>
              <div className="h-[6px] w-[6px] rounded-2xl bg-black"></div>
            </div>
          </div>
          <div data-title="사본 이지로그인" className="flex flex-col gap-[10px]">
            <div className="flex w-full cursor-pointer justify-between">
              <div className="flex items-center gap-[4px]">
                <Image src="/info.svg" alt="info" width={24} height={24} />
                <Text className="text-[16px] font-semibold">이지로그인</Text>
              </div>
              <Image src="/top.svg" alt="top" width={24} height={24} />
            </div>
            <Text className="text-gray4 cursor-pointer text-[16px] font-normal">이용 가이드</Text>
            <Text className="text-gray4 cursor-pointer text-[16px] font-normal">개발자 가이드</Text>
            <Text className="text-gray4 cursor-pointer text-[16px] font-normal">공지사항</Text>
          </div>
        </div>
        <hr className="border-gray2" />
        <div data-title="사이드 푸터" className="flex h-[66px] justify-between p-[20px]">
          <div className="flex w-full items-center gap-[10px]">
            <Text className="text-gray4 w-[110px] cursor-pointer text-center text-[16px] font-medium">로그인</Text>
            <div className="border-gray2 h-[20px] border" />
            <Text className="text-gray4 w-[110px] cursor-pointer text-center text-[16px] font-medium">회원가입</Text>
          </div>
        </div>
      </aside>
      {/* 메인페이지 */}
      {/* <section
        data-id="본문"
        className="scrollbar-hidden flex h-full flex-1 flex-col overflow-auto rounded-[20px] bg-white"
      >
        <div data-title="본몬 헤더" className="gap-[10px] p-[20px]">
          <Text className="text-[20px] leading-[120%] font-semibold">제품 소개</Text>
        </div>
        <hr className="border-gray2" />
        <div data-title="본문 소셜" className="gap-[10px] p-[20px]">
          <div className="flex gap-[10px]">
            <div className="border-gray3 flex flex-1 cursor-pointer justify-center gap-[10px] rounded-[15px] border p-[20px]">
              <div className="flex items-center gap-[10px]">
                <Image src="/kakao.svg" alt="kakao" width={32} height={32} />
                <Text className="text-gray5 text-[16px] font-medium">카카오 로그인 연결하기</Text>
              </div>
            </div>
            <div className="border-gray3 flex flex-1 cursor-pointer justify-center gap-[10px] rounded-[15px] border p-[20px]">
              <div className="flex items-center gap-[10px]">
                <Image src="/naver.svg" alt="naver" width={32} height={32} />
                <Text className="text-gray5 text-[16px] font-medium">네이버 로그인 연결하기</Text>
              </div>
            </div>
            <div className="border-gray3 flex flex-1 cursor-pointer justify-center gap-[10px] rounded-[15px] border p-[20px]">
              <div className="flex items-center gap-[10px]">
                <Image src="/google.svg" alt="google" width={32} height={32} />
                <Text className="text-gray5 text-[16px] font-medium">구글 로그인 연결하기</Text>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray2" />
        <div data-title="본몬 헤더" className="gap-[10px] p-[20px]">
          <Text className="text-[20px] font-semibold">이런 점이 좋아요</Text>
        </div>
        <hr className="border-gray2" />
        <div className="flex-1 gap-[10px] p-[20px]">
          <div className="flex gap-[10px]">
            <div className="border-gray3 flex flex-1 flex-col items-center gap-[10px] rounded-[15px] border p-[20px]">
              <Image src="/home1.svg" alt="home1" width={253} height={253} />
              <div className="flex flex-col items-center gap-[10px]">
                <Text className="text-[20px] font-bold text-black">소셜로그인 간편 구현</Text>
                <Text className="text-gray4 text-center font-normal">
                  이지로그인에서 제공하는 <br />
                  API를 사용하여 간편하게 <br />
                  소셜로그인을 구현할 수 있습니다
                </Text>
              </div>
            </div>
            <div className="border-gray3 flex flex-1 flex-col items-center gap-[10px] rounded-[15px] border p-[20px]">
              <Image src="/home2.svg" alt="home2" width={253} height={253} />
              <div className="flex flex-col items-center gap-[10px]">
                <Text className="text-[20px] font-bold text-black">소셜로그인 다중 구현</Text>
                <Text className="text-gray4 text-center font-normal">
                  여러 개의 소셜로그인을 <br />
                  구현해야하나요? <br />
                  이지로그인은 소셜로그인 한 개 당 <br />한 번의 API 호출만 필요합니다
                </Text>
              </div>
            </div>
            <div className="border-gray3 flex flex-1 flex-col items-center gap-[10px] rounded-[15px] border p-[20px]">
              <Image src="/home3.svg" alt="home3" width={253} height={253} />
              <div className="flex flex-col items-center gap-[10px]">
                <Text className="text-[20px] font-bold text-black">소셜로그인 간편 구현</Text>
                <Text className="text-gray4 text-center font-normal">
                  소셜로그인 구현시간을 <br />
                  대폭 줄여드립니다
                </Text>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray2" />
        <div className="flex justify-between px-[20px] pt-[10px] pb-[20px]">
          <Text className="text-gray4 cursor-pointer text-[14px] font-normal">문의하기</Text>
          <Text className="text-gray4 text-[14px] font-normal">copyright @ 2025 팀이름 All rights reserved.</Text>
        </div>
      </section> */}

      {/* 신규 앱 등록 페이지*/}
      {/* <section
        data-id="본문"
        className="scrollbar-hidden flex h-full flex-1 flex-col overflow-auto rounded-[20px] bg-white"
      >
        <div data-title="본몬 헤더" className="gap-[10px] p-[20px]">
          <Text className="text-[20px] leading-[120%] font-semibold">신규 앱 등록</Text>
        </div>
        <hr className="border-gray2" />
        <div className="flex flex-1 flex-col gap-[10px] p-[20px]">
          <Text className="text-gray4 text-[16px] leading-[150%] font-normal">
            카카오 디벨로퍼스에서 해당 앱이 미리 등록되어있어야 합니다
          </Text>
          <input
            className="placeholder-gray4 border-gray3 w-full gap-[10px] rounded-[10px] border p-[15px] leading-[150%] font-normal text-black outline-0"
            placeholder="app ID 입력"
          />
          <input
            className="placeholder-gray4 border-gray3 w-full gap-[10px] rounded-[10px] border p-[15px] leading-[150%] font-normal text-black outline-0"
            placeholder="app name 입력"
          />
          <input
            className="placeholder-gray4 border-gray3 w-full gap-[10px] rounded-[10px] border p-[15px] leading-[150%] font-normal text-black outline-0"
            placeholder="rest key 입력"
          />
          <input
            className="placeholder-gray4 border-gray3 w-full gap-[10px] rounded-[10px] border p-[15px] leading-[150%] font-normal text-black outline-0"
            placeholder="redirect URL 입력 (선택)"
          />
        </div>
        <hr className="border-gray2" />
        <div className="flex justify-end px-[20px] pt-[10px] pb-[20px]">
          <Button className="gap-[10px] px-[15px] py-[10px]" onClick={() => {}}>
            앱 등록
          </Button>
        </div> 
      </section> */}

      {/* 앱 수정 페이지 */}
      <section
        data-id="본문"
        className="scrollbar-hidden flex h-full flex-1 flex-col overflow-auto rounded-[20px] bg-white"
      >
        <div data-title="본몬 헤더" className="gap-[10px] p-[20px]">
          <Text className="text-[20px] leading-[120%] font-semibold">신규 앱 등록</Text>
        </div>
        <hr className="border-gray2" />
        <div className="flex flex-1 flex-col gap-[10px] p-[20px]">
          <Text className="text-gray4 text-[16px] leading-[100%] font-medium">app ID : 123456</Text>
          <input
            className="placeholder-gray4 border-gray3 w-full gap-[10px] rounded-[10px] border p-[15px] leading-[150%] font-normal text-black outline-0"
            placeholder="app name 입력"
          />
          <input
            className="placeholder-gray4 border-gray3 w-full gap-[10px] rounded-[10px] border p-[15px] leading-[150%] font-normal text-black outline-0"
            placeholder="rest key 입력"
          />
          <input
            className="placeholder-gray4 border-gray3 w-full gap-[10px] rounded-[10px] border p-[15px] leading-[150%] font-normal text-black outline-0"
            placeholder="redirect URL 입력 (선택)"
          />
        </div>
        <hr className="border-gray2" />
        <div className="flex justify-end px-[20px] pt-[10px] pb-[20px]">
          <Button className="gap-[10px] px-[15px] py-[10px]" onClick={() => {}}>
            앱 등록
          </Button>
        </div>
      </section>

      {/* 내 앱 관리 페이지*/}
      {/* <section
        data-id="본문"
        className="scrollbar-hidden flex h-full flex-1 flex-col overflow-auto rounded-[20px] bg-white"
      >
        <div data-title="본몬 헤더" className="gap-[10px] p-[20px]">
          <div className="flex gap-[10px]">
            <Text className="text-[20px] leading-[100%] font-semibold">내 앱 관리</Text>
            <Text className="text-gray4 text-right text-[16px] leading-[150%] font-normal">총 5개</Text>
          </div>
        </div>
        <hr className="border-gray2" />
        <div className="flex flex-1 flex-col gap-[10px] p-[20px]">
          <div className="border-gray3 flex flex-col gap-[10px] rounded-[10px] border p-[15px]">
            <Text className="text-gray4 text-[16px] leading-[150%] font-normal">app ID : 123456</Text>
            <Text className="text-[20px] leading-[150%] font-semibold">앱 이름이 들어가는 자리</Text>
          </div>
          <div className="border-gray3 flex flex-col gap-[10px] rounded-[10px] border p-[15px]">
            <Text className="text-gray4 text-[16px] leading-[150%] font-normal">app ID : 123456</Text>
            <Text className="text-[20px] leading-[150%] font-semibold">앱 이름이 들어가는 자리</Text>
          </div>
          <div className="border-gray3 flex flex-col gap-[10px] rounded-[10px] border p-[15px]">
            <Text className="text-gray4 text-[16px] leading-[150%] font-normal">app ID : 123456</Text>
            <Text className="text-[20px] leading-[150%] font-semibold">앱 이름이 들어가는 자리</Text>
          </div>
          <div className="border-gray3 flex flex-col gap-[10px] rounded-[10px] border p-[15px]">
            <Text className="text-gray4 text-[16px] leading-[150%] font-normal">app ID : 123456</Text>
            <Text className="text-[20px] leading-[150%] font-semibold">앱 이름이 들어가는 자리</Text>
          </div>
          <div className="border-gray3 flex flex-col gap-[10px] rounded-[10px] border p-[15px]">
            <Text className="text-gray4 text-[16px] leading-[150%] font-normal">app ID : 123456</Text>
            <Text className="text-[20px] leading-[150%] font-semibold">앱 이름이 들어가는 자리</Text>
          </div>
        </div>
      </section> */}
    </div>
  )
}
