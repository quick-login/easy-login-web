import { NoticeDetail } from '@/widgets'

export const NoticeInfoPage = ({ noticeId }: { noticeId: number }) => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <NoticeDetail noticeId={noticeId} />
    </section>
  )
}
