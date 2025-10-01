import { UpdateAppForm, UpdateBtns } from '@/src/features/updateApp'
import { PageHeader } from '@/src/widgets'

export const MyAppInfoPage = () => {
  return (
    <section className="scrollbar-hidden flex h-full flex-1 flex-col overflow-auto rounded-[20px] bg-white">
      <PageHeader title="내 앱 수정" />
      <hr className="border-gray2" />
      <UpdateAppForm />
      <hr className="border-gray2" />
      <UpdateBtns />
    </section>
  )
}
