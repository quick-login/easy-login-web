import { NoticeInfoPage } from '@/src/views'

type Props = {
  params: Promise<{ noticeId: number }>
}

export default async function NoticeRead({ params }: Props) {
  const { noticeId } = await params
  return <NoticeInfoPage noticeId={noticeId} />
}
