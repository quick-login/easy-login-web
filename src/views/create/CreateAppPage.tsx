import { CreateAppForm } from '@/src/features/createApp'
import { PageHeader } from '@/src/widgets'

export const CreateAppPage = () => {
  return (
    <section className="scrollbar-hidden flex h-full flex-1 flex-col overflow-auto rounded-[20px] bg-white">
      <PageHeader title="신규 앱 등록" />
      <hr className="border-gray2" />
      <CreateAppForm />
    </section>
  )
}
