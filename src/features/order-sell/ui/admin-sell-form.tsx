import Image from 'next/image'
import { useAdminSell } from '../model/useAdmin-sell'
import { useInputNumber } from '../model/useInputNumber'
import { useModalStore } from '@/src/shared/store/useModalStore'
import { Button, Input, RadioBtn, Text } from '@/src/shared/ui'

export const AdminSellForm = () => {
  const setModal = useModalStore(state => state.setModal)
  const { InputNum, handleChangeDiscount, handleChangeInput } = useInputNumber()
  const { handleSubmit } = useAdminSell()

  return (
    <section className={'fixed inset-0 z-[1100] flex h-[100vh] w-full items-center justify-center bg-black/50'}>
      <div className="flex h-[600px] w-[800px] min-w-[250px] flex-col items-center justify-center rounded-[20px] bg-white">
        <div className="border-b-gray3 flex w-full items-center justify-between border-b p-[20px]">
          <Text className="text-[20px] font-bold">상품 등록</Text>
          <Image
            className="cursor-pointer"
            src="/menu.svg"
            alt="menu"
            width={24}
            height={24}
            onClick={() => setModal('isAdminSell', false)}
          />
        </div>
        <form
          id="admin-sell-form"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e, new FormData(e.currentTarget))}
          className="flex w-full flex-1 flex-col gap-[10px] p-[20px]"
        >
          <Text className="text-gray4">판매 상품 등록을 위한 정보 입력입니다.</Text>
          <Input name="name" placeholder="상품 이름 (50자)" />
          <Input name="price" placeholder="가격" value={InputNum.price} onChange={handleChangeInput} />
          <Input name="value" placeholder="상품 개수" onChange={handleChangeInput} value={InputNum.value} />
          <Input
            name="discountRate"
            placeholder="할인율 (선택)"
            value={InputNum.discountRate}
            onChange={handleChangeDiscount}
          />
          <div className="flex gap-[20px]">
            <RadioBtn
              title="API 호출 횟수 증가"
              id="API_REMAIN_COUNT_INCREMENT"
              name="type"
              value="API_REMAIN_COUNT_INCREMENT"
            />
            <RadioBtn
              title="카카오 앱 등록 개수 증가"
              id="KAKAO_APP_REGISTER_INCREMENT"
              name="type"
              value="KAKAO_APP_REGISTER_INCREMENT"
            />
          </div>
        </form>
        <Button form="admin-sell-form" type="submit" className="w-full rounded-none rounded-b-[20px]">
          상품 등록하기
        </Button>
      </div>
    </section>
  )
}
