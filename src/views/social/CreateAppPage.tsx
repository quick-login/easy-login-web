import { CreateAppForm } from '@/src/features/createApp'
import { PageHeader } from '@/src/widgets'

export const CreateAppPage = ({ type }: { type: string }) => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="신규 앱 등록" />
      <hr className="border-gray2" />
      <CreateAppForm type={type} />
    </section>
  )
}
