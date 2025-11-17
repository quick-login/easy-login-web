import { UserBtns, UserCount } from '@/entities/user'
import { ProfileForm } from '@/features/update-profile'
import { PageHeader } from '@/widgets'

export const ProfilePage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="마이페이지" />
      <hr className="border-gray2" />
      <UserCount />
      <hr className="border-gray2" />
      <UserBtns />
      <hr className="border-gray2" />
      <ProfileForm />
    </section>
  )
}
