import Image from 'next/image'
import { signOutWidthForm } from '@/src/entities/user/model/user-auth'
import { A, Button, Footer, Text } from '@/src/shared/ui'

export const ProfileFooter = () => {
  return (
    <Footer>
      <div className="flex gap-[20px]">
        <A className="text-negative flex items-center justify-center gap-[4px] text-[14px]" onClick={signOutWidthForm}>
          <Image src="/trash.svg" alt="logout" width={20} height={20} />
          <Text className="text-negative">로그아웃</Text>
        </A>
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
