import { SellModalBtn } from '@/entities/sell'
import { Footer } from '@/shared/ui'
import { PageHeader, SellList } from '@/widgets'

export const SellPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="상품 둘러보기" />
      <hr className="border-gray2" />
      <SellList />
      <hr className="border-gray2" />
      <Footer>
        <div className="400:flex-row 400:px-0 flex w-full flex-col items-center justify-end px-[15px]">
          <SellModalBtn />
        </div>
      </Footer>
    </section>
  )
}
