export type Question = {
  questionId: number
  title: string
  content: string
  status: 'WAITING' | 'COMPLETED'
  questionDate: string
}

export type QuestAnswer = {
  answer: string | null
  answeredDate: string | null
}

export type QuestInfo = Question & QuestAnswer
