import { LinkText, Text } from '@/src/shared/ui'
import { AuthFooter, LoginForm } from '@/src/widgets'

export const LoginPage = () => {
  return (
    <>
      <Text className="text-[28px] leading-[100%] font-bold">로그인</Text>
      <LoginForm />
      <AuthFooter>
        <Text className="text-gray4 text-[16px] leading-[150%] font-normal">아직 회원이 아니신가요?</Text>
        <LinkText className="cursor-pointer text-[16px] leading-[150%] font-normal text-black" link="/register">
          회원가입
        </LinkText>
      </AuthFooter>
    </>
  )
}
