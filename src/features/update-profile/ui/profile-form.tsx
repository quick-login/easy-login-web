'use client'

import { useSession } from 'next-auth/react'
import { ProfileFooter } from './profile-Footer'
import { usePatchProfile } from '../model/usePatchProfile'
import { Input, InputPassword, Text } from '@/shared/ui'

export const ProfileForm = () => {
  const { data: session } = useSession()
  const { handleSubmit } = usePatchProfile()
  return (
    <>
      <div className="flex flex-1 flex-col gap-[10px] p-[20px]">
        <Text className="text-gray4 text-[14px] md:text-[16px]">회원님의 정보를 확인하고 수정할 수 있습니다</Text>
        <form
          id="profile-form"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e, new FormData(e.currentTarget))}
          className="flex flex-col gap-[10px]"
        >
          <Input
            name="email"
            placeholder="이메일 입력"
            type="text"
            className="w-full !text-[14px] md:!text-[16px]"
            readOnly
            defaultValue={session?.user?.email}
          />
          <Input
            name="name"
            placeholder="이름 입력"
            type="text"
            className="w-full !text-[14px] md:!text-[16px]"
            defaultValue={session?.user?.name}
          />
          <InputPassword name="password" placeholder="새 비밀번호 입력" className="!text-[14px] md:!text-[16px]" />
          <InputPassword
            name="passwordCheck"
            placeholder="새 비밀번호 다시 입력"
            className="!text-[14px] md:!text-[16px]"
          />
        </form>
      </div>
      <hr className="border-gray2" />
      <ProfileFooter />
    </>
  )
}
