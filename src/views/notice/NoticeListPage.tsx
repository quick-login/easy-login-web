import { MainFooter } from '@/entities/main'
import { getSession } from '@/shared/lib'
import { Footer, LinkButton } from '@/shared/ui'
import { NoticeList } from '@/widgets'

export const NoticeListPage = async ({ page }: { page: string }) => {
  const session = await getSession()
  return (
    <>
      <NoticeList page={page} />
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
    </>
  )
}
