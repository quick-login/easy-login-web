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
        <div className="flex flex-1 justify-end">
          <LinkButton href="/question/write" className="p-[15px]">
            작성하기
          </LinkButton>
        </div>
      </Footer>
    </section>
  )
}
