import { QuestionForm } from '@/src/features/write/question'
import { PageHeader } from '@/src/widgets'

export const QuestionWritePage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="나의 문의내역" />
      <hr className="border-gray2" />
      <QuestionForm />
    </section>
  )
}
