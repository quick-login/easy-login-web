import { LinkText, Text } from '@/src/shared/ui'
import { AuthFooter, LoginForm } from '@/src/widgets'

export const LoginPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-[30px] border">
      <Text children="로그인" className="text-[28px] font-bold" />
      <LoginForm />
      <AuthFooter>
        <Text className="text-gray4 text-[16px]">아직 회원이 아니신가요?</Text>
        <LinkText className="cursor-pointer text-[16px] text-black" link="/register">
          회원가입
        </LinkText>
      </AuthFooter>
    </div>
  )
}
