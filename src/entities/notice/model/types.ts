export type Notice = {
  noticeId: number
  title: string
  name: string
  createdAt: string
  fixed: boolean
}

export type NoticeItem = {
  fixed: boolean
  noticeId: number
  title: string
  name: string
  createdAt: string
  content: string
}
