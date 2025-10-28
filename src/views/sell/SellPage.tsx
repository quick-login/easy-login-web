import { SellItemCard, SellPopup } from '@/src/entities/sell'
import { Footer, LinkButton, Text } from '@/src/shared/ui'
import { PageHeader, Pagination } from '@/src/widgets'

export const SellPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="상품 둘러보기" />
      <hr className="border-gray2" />
      <div className="scrollbar-hidden flex flex-1 flex-col gap-[10px] overflow-x-auto p-[20px]">
        <div className="grid grid-cols-4">
          <SellItemCard />
        </div>
      </div>
      {/* <Pagination
          currentPage={pagination.currentPage}
          totalElements={pagination.totalElements}
          pageSize={pagination.pageSize}
          totalPages={pagination.totalPages}
        /> */}
      <hr className="border-gray2" />
      <Footer>
        <div className="flex flex-1 justify-end">
          <LinkButton href="/notice/write" className="p-[15px] font-normal">
            상품 주문
          </LinkButton>
        </div>
      </Footer>
      <SellPopup />
    </section>
  )
}
