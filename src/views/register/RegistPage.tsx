import { LinkText, Text } from '@/src/shared/ui'
import { AuthFooter, RegistForm } from '@/src/widgets'

export const RegistPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[30px] border">
      <Text children="회원가입" className="text-[28px] font-bold" />
      <RegistForm />
      <AuthFooter>
        <Text className="text-gray4 text-[16px]">이미 회원이신가요?</Text>
        <LinkText className="cursor-pointer text-[16px] text-black" link="/">
          로그인
        </LinkText>
      </AuthFooter>
    </div>
  )
}
