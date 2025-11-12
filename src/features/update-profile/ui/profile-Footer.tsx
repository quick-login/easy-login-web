import { ProfileLogout } from './profile-logout'
import { Button, Footer } from '@/shared/ui'

export const ProfileFooter = () => {
  return (
    <Footer>
      <div className="400:flex-row 400:px-0 flex w-full flex-col items-center justify-between px-[5px]">
        <div className="400:order-none order-2 flex gap-[20px]">
          <ProfileLogout />
          {/* <div className="text-negative flex cursor-pointer items-center justify-center gap-[4px] text-[14px]">
            <Image src="/trash.svg" alt="logout" width={20} height={20} />
            <Text className="text-negative">회원탈퇴</Text>
          </div> */}
        </div>
        <Button form="profile-form" type="submit" className="400:w-fit 400:order-none order-1 w-full p-[15px]">
          수정 하기
        </Button>
      </div>
    </Footer>
  )
}
