import { MainFooter } from '@/entities/main'
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
      {session?.user?.role === 'ADMIN' ? (
        <Footer>
          <div className="400:px-0 flex w-full flex-1 justify-end px-[15px]">
            <LinkButton href="/notice/write" className="400:w-fit w-full p-[15px]">
              공지 작성
            </LinkButton>
          </div>
        </Footer>
      ) : (
        <MainFooter />
      )}
    </section>
  )
}
