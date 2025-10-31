import { AdminQuestionDetail, PageHeader } from '@/src/widgets'

export const AdminQuestionAnswerPage = ({ questionId }: { questionId: number }) => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="문의 내역" />
      <hr className="border-gray2" />
      <AdminQuestionDetail questionId={questionId} />
    </section>
  )
}
