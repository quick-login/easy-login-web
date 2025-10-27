'use client'

import { useReqCash } from '../model/useReqCash'
import { A, Button, Input, Text } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'

export const PostCash = () => {
  const { cash, handleCashBtn, handleChangeCash, handleReqCash } = useReqCash()
  return (
    <>
      <div className="flex flex-1 flex-col gap-[20px] p-[20px]">
        <Text className="text-gray5 font-semibold">입금 계좌</Text>
        <Text className="text-gray5 border-gray3 rounded-[10px] border p-[15px] font-semibold">카카오뱅크 1234</Text>
        <form action="" className="flex flex-col gap-[5px]">
          <Input placeholder="충전할 금액을 입력해주세요." type="text" value={cash} onChange={handleChangeCash} />
          <div className="border-gray3 flex rounded-[10px] border">
            <A className="border-r-gray3 flex-1 border-r" onClick={() => handleCashBtn(1000)}>
              +1천원
            </A>
            <A className="border-r-gray3 flex-1 border-r" onClick={() => handleCashBtn(5000)}>
              +5천원
            </A>
            <A className="border-r-gray3 flex-1 border-r" onClick={() => handleCashBtn(10000)}>
              +1만원
            </A>
            <A className="flex-1" onClick={() => handleCashBtn(30000)}>
              +3만원
            </A>
          </div>
        </form>

        <Text className="text-gray5 font-semibold">
          신청 가능 금액은 최소 1,000원 이상이며, 100원 단위로 입력해주세요.
        </Text>
        <Text className="text-gray5 font-semibold">충전 신청 후 영업일 3일 이내 승인됩니다.</Text>
      </div>
      <hr className="border-gray2" />
      <Footer>
        <div />
        <Button type="button" variant="primary" className="p-[15px]" onClick={handleReqCash}>
          충전 신청하기
        </Button>
      </Footer>
    </>
  )
}
