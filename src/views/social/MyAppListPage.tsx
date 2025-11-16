import { MainFooter } from '@/entities/main'
import { AppList, PageHeader } from '@/widgets'

export const MyAppListPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="내 앱 관리" />
      <hr className="border-gray2" />
      <AppList />
      <hr className="border-gray2" />
      <MainFooter />
    </section>
  )
}
