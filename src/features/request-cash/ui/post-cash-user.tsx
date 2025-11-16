'use client'

import { useReqCash } from '../model/useReqCash'
import { A, Button, Footer, Input, Text } from '@/shared/ui'

export const PostCash = () => {
  const { cash, handleCashBtn, handleChangeCash, handleReqCash } = useReqCash()
  return (
    <>
      <div className="flex flex-1 flex-col gap-[20px] p-[20px]">
        <Text className="text-gray5 text-[14px] font-semibold md:text-[16px]">입금 계좌</Text>
        <Text className="text-gray5 border-gray3 rounded-[10px] border p-[15px] text-[12px] font-semibold md:text-[16px]">
          카카오뱅크 3333-22-7865484 (예금주 : 송광호)
        </Text>
        <form action="" className="flex flex-col gap-[5px]">
          <Input placeholder="충전할 금액을 입력해주세요." type="text" value={cash} onChange={handleChangeCash} />
          <div className="border-gray3 flex rounded-[10px] border text-[12px] md:text-[14px]">
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
        <div className="flex flex-col gap-[10px]">
          <Text className="text-gray5 text-[12px] font-semibold md:text-[14px]">
            신청 가능 금액은 최소 1,000원 이상이며, 100원 단위로 입력해주세요.
          </Text>
          <Text className="text-gray5 text-[12px] font-semibold md:text-[14px]">
            안내된 입금 계좌에 신청 금액을 송금 및 신청하시면 영업일 기준 3일 이내 처리됩니다.
          </Text>
          <Text className="text-gray5 text-[12px] font-semibold md:text-[14px]">
            서비스 이용에 장애 발생 시 문의사항에 남겨주시면 감사합니다.
          </Text>
        </div>
      </div>
      <hr className="border-gray2" />
      <Footer>
        <div className="400:flex-row 400:px-0 flex w-full flex-col items-center justify-end px-[15px]">
          <Button type="button" variant="primary" className="400:w-fit w-full p-[15px]" onClick={handleReqCash}>
            충전 신청하기
          </Button>
        </div>
      </Footer>
    </>
  )
}
