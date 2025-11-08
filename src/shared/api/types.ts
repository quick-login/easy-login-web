export interface Page {
  currentPage: number
  pageSize: number
  totalElements: number
  totalPages: number
}

export type UserType = {
  name: string
  email: string
  cash: number
  remainCount: number
  maxKakaoAppCount: number
  role: 'USER' | 'ADMIN'
}

export interface ResponseType<Tdata = unknown> {
  code: string
  message: string
  data: Tdata
  pagination?: Page
  accessToken?: string
  refreshToken?: string
}

export interface ActionResponse<Tdata = unknown> extends ResponseType<Tdata> {
  success: boolean
}
