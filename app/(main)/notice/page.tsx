import { NoticeListPage } from '@/views'

export default async function NoticeList({ searchParams }: { searchParams: Promise<{ page: string }> }) {
  const { page } = await searchParams
  return <NoticeListPage page={page} />
}
