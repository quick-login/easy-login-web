'use client'

import { useSession } from 'next-auth/react'
import { usePatchProfile } from '../model/usePatchProfile'
import { Input, InputPassword } from '@/src/shared/ui'

export const ProfileForm = () => {
  const { data: session } = useSession()
  const { handleSubmit } = usePatchProfile()
  return (
    <form
      id="profile-form"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e, new FormData(e.currentTarget))}
      className="flex flex-col gap-[10px]"
    >
      <Input
        name="email"
        placeholder="이메일 입력"
        type="text"
        className="w-full"
        readOnly
        defaultValue={session?.user?.email}
      />
      <Input name="name" placeholder="이름 입력" type="text" className="w-full" defaultValue={session?.user?.name} />
      <InputPassword name="password" placeholder="새 비밀번호 입력" />
      <InputPassword name="passwordCheck" placeholder="새 비밀번호 다시 입력" />
    </form>
  )
}
