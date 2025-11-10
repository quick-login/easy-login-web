import { AppList } from '@/widgets'

export const MyAppPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <AppList />
    </section>
  )
}
