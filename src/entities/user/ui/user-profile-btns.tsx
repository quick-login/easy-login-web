'use client'

import { useAlertStore } from '@/shared/store'
import { LinkButton, Text } from '@/shared/ui'

export const UserBtns = () => {
  const onOpenAlert = useAlertStore(state => state.onOpenAlert)
  return (
    <div className="flex flex-col gap-[10px] p-[20px]">
      <Text className="text-gray4 text-[14px] md:text-[16px]">회원님의 다른 정보도 확인해보세요</Text>
      <div className="flex flex-col items-center justify-center gap-[10px] md:flex-row">
        <LinkButton
          href=""
          className="flex w-full items-center justify-center !text-[14px] md:!text-[16px]"
          onClick={() => onOpenAlert('추후 제공될 예정입니다.')}
        >
          로그인 내역 확인
        </LinkButton>
        <LinkButton
          href="/question?page=1"
          className="flex w-full items-center justify-center !text-[14px] md:!text-[16px]"
        >
          문의 내역 확인
        </LinkButton>
        <LinkButton
          href="/order?page=1"
          className="flex w-full items-center justify-center !text-[14px] md:!text-[16px]"
        >
          주문 내역 확인
        </LinkButton>
      </div>
    </div>
  )
}
