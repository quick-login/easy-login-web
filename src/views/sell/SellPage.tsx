import { SellModalBtn } from '@/src/entities/sell'
import { Button, Footer } from '@/src/shared/ui'
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
          <SellModalBtn />
        </div>
      </Footer>
    </section>
  )
}
