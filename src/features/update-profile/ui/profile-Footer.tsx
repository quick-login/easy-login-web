import { ProfileLogout } from './profile-logout'
import { Button, Footer } from '@/shared/ui'

export const ProfileFooter = () => {
  return (
    <Footer>
      <div className="flex gap-[20px]">
        <ProfileLogout />
        {/* <div className="text-negative flex cursor-pointer items-center justify-center gap-[4px] text-[14px]">
            <Image src="/trash.svg" alt="logout" width={20} height={20} />
            <Text className="text-negative">회원탈퇴</Text>
          </div> */}
      </div>
      <Button form="profile-form" type="submit" className="p-[15px]">
        수정 하기
      </Button>
    </Footer>
  )
}
