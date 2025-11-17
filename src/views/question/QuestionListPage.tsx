import { Footer, LinkButton } from '@/shared/ui'
import { PageHeader, QuestionList } from '@/widgets'

export const QuestionListPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="나의 문의내역" />
      <hr className="border-gray2" />
      <QuestionList />
      <hr className="border-gray2" />
      <Footer>
        <div className="400:flex-row 400:px-0 flex w-full flex-col items-center justify-end px-[15px]">
          <LinkButton href="/question/write" className="400:w-fit w-full p-[15px]">
            작성하기
          </LinkButton>
        </div>
      </Footer>
    </section>
  )
}
