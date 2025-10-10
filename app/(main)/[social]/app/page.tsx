import { MyAppPage } from '@/src/views'

type Props = {
  params: {
    socialType: string
  }
}

const MyAppView = ({ params }: Props) => {
  const { socialType } = params
  console.log(params)
  return <MyAppPage />
}

export default MyAppView
