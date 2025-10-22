import { NoticeForm } from '@/src/features/write/notice'
import { PageHeader } from '@/src/widgets'

export const NoticeWritePage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="공지사항" />
      <hr className="border-gray2" />
      <NoticeForm />
    </section>
  )
}
