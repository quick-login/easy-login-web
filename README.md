# 🔐 이지로그인 [EASY_LOGIN]

> #### 소셜 로그인 원클릭 서비스

<div align='center'>
  <div>
<img width="1600" height="903" alt="Image" src="https://github.com/user-attachments/assets/f020ad90-1d97-4bac-b484-01a69503d8b9" />
    <!-- <img src='https://github.com/user-attachments/assets/01917d46-4367-40ca-ab51-0f0d1443899e'/> -->
  </div>
  <div>
    <h3>📅 개발 기간</h3>
    <b>2025. 09. 21 ~ Ing</b>
    <h3>📅 정식 서비스 배포</h3>
    <b>미 정</b>
  </div>
  <br/>
</div>

## 🤔 개발 배경

> 💦 프로젝트에 소셜 로그인 연동해야하는데.. 이거 어렵지 않나..?
>
> 💦 소셜 로그인 또 오류나네 ㅠㅠ 뭐가 문제지..?
>
> 💦 매번 소셜 연동 반복 작업.. 이젠 그만하고 싶어!

### &ensp; 😎 복잡한 소셜 로그인 연동은 그만! 저희가 해드릴게요!

 <br/>

## 🔐 프로젝트 소개

> ✔ 이지로그인은 **프로젝트 개발 시 소셜 로그인을 간편하게 제공해주는 서비스**입니다.
>
> ✔ 이지로그인 API 한번의 호출로 **소셜 로그인 구현 과정을 생략**해보세요!
>
> ✔ **카카오, 네이버, 구글** 로그인을 간편하게 프로젝트에 적용해보세요!

    ** 현재는 카카오 로그인만 서비스하고 있습니다. **

<br/>

### &ensp; 🛠️ 프론트 엔드 기술 스택

&ensp;[![Skills](https://go-skill-icons.vercel.app/api/icons?i=next,typescript,zustand,tailwindcss,authjs,pnpm,jest,)](https://github.com/quick-login/easy-login-web)

&ensp; 프로젝트는 FSD 아키텍쳐를 토대로 개발되었습니다.

### &ensp; 🛠️ 백엔드 기술 스택

&ensp;[![Skills](https://go-skill-icons.vercel.app/api/icons?i=spring,java,springsecurity,springdatajpa,mariadb,ec2,s3,jwt)](https://github.com/quick-login/easy-login-web)

<br/>

> ## 🖥️ 서비스 소개

<img width="1600" height="903" alt="Image" src="https://github.com/user-attachments/assets/781df19e-ae58-4fd5-b8cf-4f392e7fd99b" alt="메인페이지" />
<img width="1600" height="903" alt="Image" src="https://github.com/user-attachments/assets/36f7076b-5ec9-4b6f-a0a4-83eb82336f2b" alt="소셜 로그인" />
<img width="1600" height="903" alt="Image" src="https://github.com/user-attachments/assets/9b6df124-98fc-4e2c-b798-dd1c0d7238e2" alt="상품주문" />
<img width="1600" height="903" alt="Image" src="https://github.com/user-attachments/assets/cf68317a-f665-42d7-9413-9631a9681d06" alt="주문내역" />
<img width="1600" height="903" alt="Image" src="https://github.com/user-attachments/assets/e7bd9dfc-b178-46e2-92fe-f227208e3acf" alt="캐시조회" />
<img width="1600" height="903" alt="Image" src="https://github.com/user-attachments/assets/e415443b-d780-4440-8372-3d69cc84b307" alt="문의" />
<img width="1600" height="903" alt="Image" src="https://github.com/user-attachments/assets/0e42de13-0195-44c4-91f6-5d4269c5a0da" alt="모바일" />

> ## 📁 프론트 프로젝트 구조

```bash
app                       # next AppRouter 폴더
src/
├── __test__              # 테스트코드
│   ├── __mocks__         # 테스트 mocks 데이터
│   ├── integration       # 통합 테스트
│   └── unit              # 유닛 테스트
├── app                   # 프로젝트 전역 설정
├── entities              # 프로젝트 도메인 설정
│   ├── cash              # cash 도메인 정의
│   │   ├── api           # 도메인 데이터 요청 (이하 같음)
│   │   ├── model         # 데이터 비즈니스 로직 및 액션 (이하 같음)
│   │   └── ui            # 도메인 UI (이하 같음)
│   ├── main              # 메인페이지 도메인
│   ├── notice            # 공지 도메인
│   ├── question          # 문의 도메인
│   ├── sell              # 상품 및 주문 도메인
│   ├── sideMenu          # 사이드 메뉴 도메인
│   ├── social            # 소셜 앱 도메인
│   └── user              # 유저 도메인
├── features              # 프로젝트 기능 정의
│   ├── createApp         # social App 등록 기능
│   │   ├── api           # post, patch, delete 요청 (이하 같음)
│   │   ├── model         # 비즈니스 로직 및 액션 (이하같음)
│   │   └── ui            # 기능 UI (이하 같음)
│   ├── deleteDetail      # 삭제 기능
│   ├── login             # 서비스 로그인 기능
│   ├── order-sell        # 상품 구매, 수정 기능
│   ├── register          # 서비스 회원가입 기능
│   ├── request-cash      # 캐시 신청 기능
│   ├── update-profile    # 프로필 수정 기능
│   ├── updateApp         # social App 수정
│   └── write             # 작성 관련
│       ├── notice        # 공지 작성 및 수정
│       └── question      # 문의 및 답변 작성
├── shared                # 프로젝트 공용 컴포넌트, 비즈니스 로직, 스토어 정의
│   ├── api               # api instance 및 공통 응답, 타입 정의
│   ├── lib               # 공용 핸들러 및 훅
│   ├── store             # 전역 상태 스토어
│   └── ui                # 공통 컴포넌트
├── views                 # 프로젝트 페이지 정의
└── widgets               # 프로젝트 페이지 위젯 정의
    ├── footer            # 페이지 하단
    ├── header            # 페이지 및 사이드 메뉴 상단
    ├── List              # 리스트 영역
    ├── ListDetail        # 리스트 상세정보 영역
    ├── popup             # 서비스 팝업 영역
    └── side              # 사이드 메뉴
        └── model         # 사이드 제어 로직
```

> ## 🗨️ 서비스 컨벤션

```
#   feat        : 기능 (새로운 기능)
#   fix         : 버그 (버그 수정)
#   release     : 서비스 배포
#   refactor    : 리팩토링
#   design      : CSS 등 사용자 UI 디자인 변경
#   comment     : 필요한 주석 추가 및 변경
#   style       : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
#   docs        : 문서 수정 (문서 추가, 수정, 삭제, README)
#   test        : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
#   chore       : 기타 변경사항 (빌드 스크립트 수정, assets, 패키지 매니저 등)
#   init        : 초기 생성
#   rename      : 파일 혹은 폴더명을 수정하거나 옮기는 작업만 한 경우
#   remove      : 파일을 삭제하는 작업만 수행한 경우
```
