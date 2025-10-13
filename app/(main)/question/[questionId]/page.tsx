import { QuestionInfoPage } from '@/src/views'

type Props = {
  params: Promise<{ questionId: number }>
}

export default async function QuestInfo({ params }: Props) {
  const { questionId } = await params
  return <QuestionInfoPage questionId={questionId} />
}
