import { UpdateAppForm, UpdateBtns } from '@/src/features/updateApp'
import { PageHeader } from '@/src/widgets'

export const MyAppInfoPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="내 앱 수정" />
      <hr className="border-gray2" />
      <UpdateAppForm />
      <hr className="border-gray2" />
      <UpdateBtns />
    </section>
  )
}
