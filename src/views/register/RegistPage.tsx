import { RegistForm } from '@/features/register'
import { LinkText, Text } from '@/shared/ui'
import { AuthFooter } from '@/widgets'

export const RegistPage = () => {
  return (
    <>
      <Text children="회원가입" className="text-[28px] leading-[100%] font-bold" />
      <RegistForm />
      <AuthFooter>
        <Text className="text-gray4 text-[16px] leading-[150%] font-normal">이미 회원이신가요?</Text>
        <LinkText className="cursor-pointer text-[16px] leading-[150%] font-normal text-black" href="/login">
          로그인
        </LinkText>
      </AuthFooter>
    </>
  )
}
