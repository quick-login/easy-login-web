import { AdminSellModalBtn } from '@/entities/sell'
import { Footer } from '@/shared/ui'
import { AdminSellList, PageHeader } from '@/widgets'

export const AdminSellPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="상품 관리" />
      <hr className="border-gray2" />
      <AdminSellList />
      <hr className="border-gray2" />
      <Footer>
        <div className="flex flex-1 justify-end">
          <AdminSellModalBtn />
        </div>
      </Footer>
    </section>
  )
}
