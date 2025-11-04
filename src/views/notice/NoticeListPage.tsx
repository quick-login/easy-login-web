import { getSession } from '@/shared/lib'
import { Footer, LinkButton } from '@/shared/ui'
import { NoticeList, PageHeader } from '@/widgets'

export const NoticeListPage = async () => {
  const session = await getSession()
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="공지사항" />
      <hr className="border-gray2" />
      <NoticeList />
      <hr className="border-gray2" />
      <Footer>
        {session?.user?.role === 'ADMIN' && (
          <div className="flex flex-1 justify-end">
            <LinkButton href="/notice/write" className="p-[15px]">
              공지 작성
            </LinkButton>
          </div>
        )}
      </Footer>
    </section>
  )
}
