import { useAdminSell } from '../model/useAdmin-sell'
import { useInputNumber } from '../model/useInputNumber'
import { Button, Input, RadioBtn, Text } from '@/shared/ui'

export const AdminSellForm = () => {
  const { InputNum, handleChangeDiscount, handleChangeInput } = useInputNumber()
  const { handleSubmit } = useAdminSell()

  return (
    <>
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
    </>
  )
}
