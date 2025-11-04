import { UserCount } from '@/entities/user'
import { ProfileForm } from '@/features/update-profile'
import { LinkButton, Text } from '@/shared/ui'
import { PageHeader } from '@/widgets'

export const ProfilePage = () => {
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="마이페이지" />
      <hr className="border-gray2" />
      <UserCount />
      <hr className="border-gray2" />
      <div className="flex flex-col gap-[20px] p-[20px]">
        <Text className="text-gray4">회원님의 다른 정보도 확인해보세요</Text>
        <div className="flex items-center justify-center gap-[10px]">
          <LinkButton href="#" className="flex flex-1 items-center justify-center">
            로그인 내역 확인
          </LinkButton>
          <LinkButton href="/question?page=1" className="flex flex-1 items-center justify-center">
            문의 내역 확인
          </LinkButton>
          <LinkButton href="/order?page=1" className="flex flex-1 items-center justify-center">
            주문 내역 확인
          </LinkButton>
        </div>
      </div>
      <hr className="border-gray2" />
      <ProfileForm />
    </section>
  )
}
