import { Footer, LinkButton } from '@/shared/ui'
import { CashList, PageHeader } from '@/widgets'

export const CashListPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="캐시 충전 내역" />
      <hr className="border-gray2" />
      <CashList />
      <hr className="border-gray2" />
      <Footer>
        <div className="400:flex-row 400:px-0 flex w-full flex-col items-center justify-end px-[15px]">
          <LinkButton href="/cash/request" className="400:w-fit w-full p-[15px]">
            캐시 충전하기
          </LinkButton>
        </div>
      </Footer>
    </section>
  )
}
