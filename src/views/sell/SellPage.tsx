import { Footer, LinkButton } from '@/src/shared/ui'
import { PageHeader, SellList } from '@/src/widgets'

export const SellPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="상품 둘러보기" />
      <hr className="border-gray2" />
      <SellList />
      <hr className="border-gray2" />
      <Footer>
        <div className="flex flex-1 justify-end">
          <LinkButton href="/sell/buy" className="p-[15px] font-normal">
            상품 주문
          </LinkButton>
          <LinkButton href="/profile/order?page=1" className="p-[15px] font-normal">
            임시 주문 내역
          </LinkButton>
        </div>
      </Footer>
    </section>
  )
}
