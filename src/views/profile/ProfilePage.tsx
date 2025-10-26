'use client'

import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { signOutWidthForm } from '@/src/entities/user/model/user-auth'
import { Button, Input, InputPassword, LinkText, Text } from '@/src/shared/ui'
import { Footer } from '@/src/shared/ui/Footer'
import { PageHeader } from '@/src/widgets'

export const ProfilePage = () => {
  const { data: session } = useSession()
  return (
    <section className="scrollbar-hidden 1060:rounded-[20px] flex h-full flex-1 flex-col overflow-auto bg-white">
      <PageHeader title="마이페이지" />
      <hr className="border-gray2" />
      <div className="flex flex-1 flex-col gap-[10px] p-[20px]">
        <div className="flex flex-col gap-[10px]">
          <Text className="text-gray4">회원님의 정보를 확인하고 수정할 수 있습니다</Text>
          <form action="" className="flex flex-col gap-[10px]">
            <Input
              name="email"
              placeholder="이메일 입력"
              type="text"
              className="w-full"
              readOnly
              defaultValue={session?.user?.email}
            />
            <Input
              name="name"
              placeholder="이름 입력"
              type="text"
              className="w-full"
              defaultValue={session?.user?.name}
            />
            <InputPassword name="password" placeholder="새 비밀번호 입력" />
            <InputPassword name="passwordCheck" placeholder="새 비밀번호 다시 입력" />
          </form>
        </div>
        <div className="flex flex-1 gap-[10px]">
          <div className="border-gray3 flex-1 rounded-[10px] border">
            <header className="flex items-center justify-between gap-[10px] p-[20px]">
              <Text className="text-[20px] leading-[120%] font-semibold">나의 접속 내역</Text>
              <Image src="/menu.svg" alt="logMenu" width={24} height={24} />
            </header>
            <hr className="border-gray2" />
            <div className="flex flex-1 flex-col gap-[10px] p-[20px]">
              <Text className="text-gray4">접속 내역이 없습니다.</Text>
            </div>
          </div>
          <div className="border-gray3 flex-1 rounded-[10px] border">
            <header className="flex items-center justify-between gap-[10px] p-[20px]">
              <Text className="text-[20px] leading-[120%] font-semibold">나의 문의 내역</Text>
              <LinkText href="/question?page=1">
                <Image src="/menu.svg" alt="QnAMenu" width={24} height={24} />
              </LinkText>
            </header>
            <hr className="border-gray2" />
            <div className="flex flex-1 flex-col gap-[10px] p-[20px]">
              <Text className="text-gray4">문의 내역이 없습니다.</Text>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray2" />
      <Footer>
        <div className="flex gap-[20px]">
          <div
            className="text-negative flex cursor-pointer items-center justify-center gap-[4px] text-[14px]"
            onClick={signOutWidthForm}
          >
            <Image src="/trash.svg" alt="logout" width={20} height={20} />
            <Text className="text-negative">로그아웃</Text>
          </div>
          <div className="text-negative flex cursor-pointer items-center justify-center gap-[4px] text-[14px]">
            <Image src="/trash.svg" alt="logout" width={20} height={20} />
            <Text className="text-negative">회원탈퇴</Text>
          </div>
        </div>
        <Button type="button" variant="primary" className="p-[15px]">
          수정 하기
        </Button>
      </Footer>
    </section>
  )
}
