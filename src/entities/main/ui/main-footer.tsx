import { Footer, LinkText, Text } from '@/src/shared/ui'

export const MainFooter = () => {
  return (
    <Footer>
      <LinkText className="text-gray4 cursor-pointer text-[14px]" href={'/question?page=1'}>
        문의하기
      </LinkText>
      <Text className="text-gray4 text-[14px]">copyright 2025 © 이지플러그 All rights reserved.</Text>
    </Footer>
  )
}
