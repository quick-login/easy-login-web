import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { questListAction } from './question-action'
import type { Page } from '@/src/shared/api/axios-client'
import type { Question } from './types'

export const useQuestList = () => {
  const questPage = Number(useSearchParams().get('page'))
  const [questList, setQuestList] = useState<Question[]>([])
  const [pagination, setPagination] = useState<Page>({
    currentPage: questPage,
    pageSize: 0,
    totalElements: 0,
    totalPages: 0,
  })

  const handleGetQuestList = async () => {
    const response = await questListAction(questPage)

    if (response.success) {
      setQuestList(response.data)
      setPagination(response.pagination)
    } else {
      alert('문의 내역을 받아오는데 오류가 발생했습니다.')
    }
  }

  useEffect(() => {
    handleGetQuestList()
    window.scrollTo(0, 0)
  }, [questPage])

  return { questList, pagination }
}
