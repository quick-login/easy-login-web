import { AdminQuestionAnswerPage } from '@/views'

type Props = {
  params: Promise<{ questionId: number }>
}

export default async function AdminQuestAnswer({ params }: Props) {
  const { questionId } = await params
  return <AdminQuestionAnswerPage questionId={questionId} />
}
