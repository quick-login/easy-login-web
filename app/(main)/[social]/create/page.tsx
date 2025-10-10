import { notFound, redirect } from 'next/navigation'
import { CreateAppPage } from '@/src/views'

type Props = {
  params: Promise<{ social: string }>
}

const ALLOWED_SOCIALS = ['kakao'] as const

const CreateAppView = async ({ params }: Props) => {
  const { social } = await params

  if (!ALLOWED_SOCIALS.includes(social as any)) {
    notFound()
  }

  return <CreateAppPage type={social} />
}

export default CreateAppView
