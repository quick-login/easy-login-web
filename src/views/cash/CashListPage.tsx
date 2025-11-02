import { Footer, LinkButton } from '@/src/shared/ui'
import { CashList, PageHeader } from '@/src/widgets'

export const CashListPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="캐시 충전 내역" />
      <hr className="border-gray2" />
      <CashList />
      <hr className="border-gray2" />
      <Footer>
        <div className="flex flex-1 justify-end">
          <LinkButton href="/cash/request" className="p-[15px]">
            캐시 충전하기
          </LinkButton>
        </div>
      </Footer>
    </section>
  )
}
