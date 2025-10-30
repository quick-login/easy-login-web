import { MainFooter } from '@/src/entities/main'
import { AdminCashList, PageHeader } from '@/src/widgets'

export const AdminCashListPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="캐시 신청 내역" />
      <hr className="border-gray2" />
      <AdminCashList />
      <hr className="border-gray2" />
      <MainFooter />
    </section>
  )
}
