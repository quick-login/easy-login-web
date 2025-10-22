import { AppHeader, AppList } from '@/src/widgets'

export const MyAppPage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <AppHeader title="내 앱 관리" count={5} />
      <hr className="border-gray2" />
      <div className="flex flex-1 flex-col gap-[10px] p-[20px]">
        <AppList id="12345" name="앱 이름이 들어갈 자리" />
        <AppList id="12345" name="앱 이름이 들어갈 자리" />
        <AppList id="12345" name="앱 이름이 들어갈 자리" />
        <AppList id="12345" name="앱 이름이 들어갈 자리" />
        <AppList id="12345" name="앱 이름이 들어갈 자리" />
      </div>
    </section>
  )
}
