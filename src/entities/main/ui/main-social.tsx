'use client'

import { SocialBtn } from './social-btn'
// import { SocialModal } from './social-modal'
import { useSocialModal } from '../model/useSocialModal'

export const MainSocial = () => {
  const { handleClickSocial } = useSocialModal()
  return (
    <div className="gap-[10px] p-[20px]">
      <div className="flex flex-col gap-[10px] md:flex-row">
        <SocialBtn img="/LogoKakao.svg" title="카카오 로그인 연결" onLink={() => handleClickSocial('/kakao')} />
        <SocialBtn img="/LogoNaver.svg" title="네이버 로그인 연결" onLink={() => handleClickSocial('/naver')} />
        <SocialBtn img="/LogoGoogle.svg" title="구글 로그인 연결" onLink={() => handleClickSocial('/google')} />
      </div>
      {/* <SocialModal isOpen={isOpen} onIsOpen={handleModalOpen} text={text} /> */}
    </div>
  )
}
