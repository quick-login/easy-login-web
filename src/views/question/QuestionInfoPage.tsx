import { PageHeader, QuestionDetail } from '@/src/widgets'

export const QuestionInfoPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="나의 문의내역" />
      <hr className="border-gray2" />
      <QuestionDetail />
    </section>
  )
}
