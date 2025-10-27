import { PostCash } from '@/src/features/request-cash'
import { PageHeader } from '@/src/widgets'

export const CashRequestPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="캐시 충전" />
      <hr className="border-gray2" />
      <PostCash />
    </section>
  )
}
