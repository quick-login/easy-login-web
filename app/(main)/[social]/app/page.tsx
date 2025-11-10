import { MyAppPage } from '@/views'

type Props = {
  params: {
    socialType: string
  }
}

const MyAppView = ({ params }: Props) => {
  const { socialType } = params
  return <MyAppPage />
}

export default MyAppView
