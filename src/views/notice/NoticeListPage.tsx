import { LinkButton } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'
import { NoticeList, PageHeader } from '@/src/widgets'

export const NoticeListPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="공지사항" />
      <hr className="border-gray2" />
      <NoticeList />
      <hr className="border-gray2" />
      <Footer>
        <div className="flex flex-1 justify-end">
          <LinkButton href="/notice/write" className="p-[15px]">
            공지 작성
          </LinkButton>
        </div>
      </Footer>
    </section>
  )
}
