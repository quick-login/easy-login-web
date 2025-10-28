import { LinkButton } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'
import { PageHeader, QuestionList } from '@/src/widgets'

export const OrderListPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="상품 주문 내역" />
      <hr className="border-gray2" />
      <QuestionList />
      <hr className="border-gray2" />
      <Footer>
        <div className="flex flex-1 justify-end">
          <LinkButton href="/sell" className="p-[15px]">
            주문하기
          </LinkButton>
        </div>
      </Footer>
    </section>
  )
}
